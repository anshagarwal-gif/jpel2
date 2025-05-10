import React, { useState, useEffect } from "react";
import "./AdminCarrer.css";
import axios from "axios";

const CareerApplications = () => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRowId, setExpandedRowId] = useState(null);
  const recordsPerPage = 10;
  const [statusChanges, setStatusChanges] = useState({});
  const [spamChanges, setSpamChanges] = useState({});
  const [savingId, setSavingId] = useState(null);
  const [viewingSpam, setViewingSpam] = useState(false);
  const [spamCount, setSpamCount] = useState(0);
  // Sorting states
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  // Responsive state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Get proper resume URL based on server structure
  const getResumeUrl = (application) => {
    if (!application) return null;
    
    // First check if resumePath exists
    if (application.resumePath) {
      // Extract just the filename regardless of path format
      const filename = application.resumePath.split(/[\/\\]/).pop();
      return `${process.env.REACT_APP_API_URL}/uploads/${encodeURIComponent(filename)}`;
    }
    
    // Check other possible properties if resumePath doesn't exist
    const possibleProps = ['resumeUrl', 'resume', 'resumeLink', 'resume_url'];
    for (const prop of possibleProps) {
      if (application[prop]) {
        // Extract just the filename regardless of path format
        const filename = application[prop].split(/[\/\\]/).pop();
        return `${process.env.REACT_APP_API_URL}/uploads/${encodeURIComponent(filename)}`;
      }
    }
    
    return null;
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      // Close expanded row on small screens when resizing
      if (window.innerWidth < 576 && expandedRowId !== null) {
        setExpandedRowId(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [expandedRowId]);

  const toggleSpamView = async () => {
    try {
      if (!viewingSpam) {
        // Switch to spam view
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin/applications?spam=true`);
        setApplications(res.data);
      } else {
        // Switch back to normal view
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin/applications`);
        setApplications(res.data);
      }
      setViewingSpam(!viewingSpam);
      setCurrentPage(1); // Reset to first page
    } catch (error) {
      console.error("Error toggling spam view:", error);
      alert("Failed to toggle spam view. Please try again.");
    }
  };

  const handleStatusChange = (id, value) => {
    setStatusChanges({
      ...statusChanges,
      [id]: value
    });
    
    // Save changes immediately
    saveChanges(id, { followupStatus: value });
  };

  const handleSpamChange = (id, isSpam) => {
    const spamValue = isSpam === "Spam";
    setSpamChanges({
      ...spamChanges,
      [id]: spamValue
    });
    
    // Save changes immediately
    saveChanges(id, { isSpam: spamValue });
  };

  const saveChanges = async (id, changes) => {
    try {
      setSavingId(id);
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/admin/applications/${id}`, changes);
      
      // Update the local data to reflect the change
      setApplications(applications.map(application => 
        application._id === id ? { ...application, ...changes } : application
      ));
      if ('isSpam' in changes && viewingSpam) {
        toggleSpamView();
      }
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Failed to save changes. Please try again.");
    } finally {
      setSavingId(null);
    }
  };

  // Handle sorting
  const handleSort = (field) => {
    if (sortField === field) {
      // Clicking the same field toggles direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // New field, default to ascending
      setSortField(field);
      setSortDirection("asc");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch applications based on current view
        const applicationsRes = await axios.get(
          viewingSpam 
            ? `${process.env.REACT_APP_API_URL}/api/admin/applications?spam=true`
            : `${process.env.REACT_APP_API_URL}/api/admin/applications`
        );
        setApplications(applicationsRes.data);
        
        // Fetch spam count
        const spamCountRes = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin/applications/spam/count`);
        setSpamCount(spamCountRes.data.count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, [viewingSpam]);
    
  // Filter applications based on search term
  const filteredApplications = applications.filter(app => 
    app.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.contactNumber?.includes(searchTerm) ||
    app.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply sorting
  const sortedApplications = [...filteredApplications].sort((a, b) => {
    let aValue, bValue;
    
    // Determine the field to sort by
    switch (sortField) {
      case "id":
        aValue = a._id || "";
        bValue = b._id || "";
        break;
      case "followup":
        aValue = statusChanges[a._id] || a.followupStatus || "Unread";
        bValue = statusChanges[b._id] || b.followupStatus || "Unread";
        break;
      case "name":
        aValue = a.name || "";
        bValue = b.name || "";
        break;
      case "email":
        aValue = a.email || "";
        bValue = b.email || "";
        break;
      case "contact":
        aValue = a.contact || "";
        bValue = b.contact || "";
        break;
      case "position":
        aValue = a.jobTitle || "";
        bValue = b.jobTitle || "";
        break;
      default:
        return 0;
    }
    
    // Handle string comparison
    if (typeof aValue === "string" && typeof bValue === "string") {
      if (sortDirection === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    }
    
    // Handle numeric comparison
    if (sortDirection === "asc") {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  // Pagination
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sortedApplications.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(sortedApplications.length / recordsPerPage);

  // Toggle row expanded/collapsed
  const toggleExpandRow = (id) => {
    if (expandedRowId === id) {
      setExpandedRowId(null); // collapse if already expanded
    } else {
      setExpandedRowId(id); // expand the clicked row
    }
  };

  // Export functions
  const exportToCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Add header row
    csvContent += "Name,Email,Contact Number,Position,Status\n";
    
    // Add data rows
    sortedApplications.forEach(item => {
      const name = item.name ? `"${item.name.replace(/"/g, '""')}"` : "";
      const email = item.email ? `"${item.email.replace(/"/g, '""')}"` : "";
      const contactNo = item.contact || "";
      const position = item.jobTitle || "";
      
      // Use the status from statusChanges if available, otherwise use the item's status or default
      const status = statusChanges[item._id] || item.followupStatus || "Unread";
      
      csvContent += `${name},${email},${contactNo},${position},${status}\n`;
    });
    
    // Create and trigger download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "career_applications.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to decide which columns to render based on screen size
  const shouldRenderColumn = (columnName) => {
    if (windowWidth < 480) {
      // Very small screens: only essential columns
      return ["id", "followup", "name", "resume"].includes(columnName);
    } else if (windowWidth < 768) {
      // Small screens: hide email and contact
      return !["email", "contact"].includes(columnName);
    }
    // Medium and large screens: all columns
    return true;
  };

  return (
    <div className="dashboard-content career-page">
      <header className="content-header">
        <div className="page-title">
          <h1>
            <span className="brand">Jpel</span>
            <span className="separator">::</span>
            <span>Career</span>
            {viewingSpam && <span className="spam-title-highlight"> - Spam Applications</span>}
          </h1>
          <p>
            <span className={`spam-status ${viewingSpam ? 'included' : 'excluded'}`}>
              <span className="spam-count">{spamCount}</span>
              <span>spam records {viewingSpam ? "showing" : "excluded"}</span>
            </span>
            <a 
              href="#" 
              className={`check-spam ${viewingSpam ? 'viewing-spam' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                toggleSpamView();
              }}
            >
              {viewingSpam ? "Show Normal Records" : "Check Spam Records"}
            </a> 
          </p>
        </div>
      </header>
      <div className="contact-controls">
        <div className="control-group">
          <button className="action-button" onClick={() => alert("Copied to clipboard")}>Copy</button>
          <button className="action-button" onClick={exportToCSV}>CSV</button>
        </div>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="data-table-container">
        <table className="contact-table">
          <thead>
            <tr>
              {shouldRenderColumn("id") && (
                <th className="id-column" onClick={() => handleSort("id")}>
                  ID
                  <span className={`sort-icon ${sortField === "id" ? (sortDirection === "asc" ? "sort-asc" : "sort-desc") : ""}`}>
                    {sortField === "id" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
              )}
              {shouldRenderColumn("followup") && (
                <th className="followup-column" onClick={() => handleSort("followup")}>
                  FOLLOWUP
                  <span className={`sort-icon ${sortField === "followup" ? (sortDirection === "asc" ? "sort-asc" : "sort-desc") : ""}`}>
                    {sortField === "followup" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
              )}
              {shouldRenderColumn("name") && (
                <th className="name-column" onClick={() => handleSort("name")}>
                  NAME
                  <span className={`sort-icon ${sortField === "name" ? (sortDirection === "asc" ? "sort-asc" : "sort-desc") : ""}`}>
                    {sortField === "name" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
              )}
              {shouldRenderColumn("email") && (
                <th className="email-column" onClick={() => handleSort("email")}>
                  EMAIL
                  <span className={`sort-icon ${sortField === "email" ? (sortDirection === "asc" ? "sort-asc" : "sort-desc") : ""}`}>
                    {sortField === "email" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
              )}
              {shouldRenderColumn("contact") && (
                <th className="contact-column" onClick={() => handleSort("contact")}>
                  CONTACT NO
                  <span className={`sort-icon ${sortField === "contact" ? (sortDirection === "asc" ? "sort-asc" : "sort-desc") : ""}`}>
                    {sortField === "contact" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
              )}
              {shouldRenderColumn("position") && (
                <th className="position-column" onClick={() => handleSort("position")}>
                  POSITION
                  <span className={`sort-icon ${sortField === "position" ? (sortDirection === "asc" ? "sort-asc" : "sort-desc") : ""}`}>
                    {sortField === "position" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
              )}
              {shouldRenderColumn("resume") && (
                <th className="resume-column">
                  RESUME
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {currentRecords.length > 0 ? (
              currentRecords.map((application, index) => {
                // Get resume URL using our helper function
                const resumeUrl = getResumeUrl(application);
                // Use the actual index for display
                const displayIndex = indexOfFirstRecord + index + 1;
                
                return (
                  <React.Fragment key={index}>
                    <tr>
                      {shouldRenderColumn("id") && (
                        <td className="add-row" data-label="ID">
                          <button 
                            className="add-button"
                            onClick={() => toggleExpandRow(index)}
                          >
                            {expandedRowId === index ? '-' : '+'}
                          </button>
                          {displayIndex}
                        </td>
                      )}
                      {shouldRenderColumn("followup") && (
                        <td data-label="FOLLOWUP">
                          <div className="status-dropdown">
                            <select 
                              value={statusChanges[application._id] || application.followupStatus || "Unread"}
                              onChange={(e) => handleStatusChange(application._id, e.target.value)}
                              disabled={savingId === application._id}
                            >
                              <option>Unread</option>
                              <option>Reviewed</option>
                              <option>Shortlisted</option>
                              <option>Interviewed</option>
                              <option>Rejected</option>
                              <option>Hired</option>
                            </select>
                            {savingId === application._id && <span className="saving-indicator">Saving...</span>}
                          </div>
                        </td>
                      )}
                      {shouldRenderColumn("name") && (
                        <td data-label="NAME">
                          <div className="name-column-content" title={application.name}>
                            {application.name}
                          </div>
                        </td>
                      )}
                      {shouldRenderColumn("email") && (
                        <td data-label="EMAIL">
                          <div className="email-column-content" title={application.email}>
                            {application.email}
                          </div>
                        </td>
                      )}
                      {shouldRenderColumn("contact") && (
                        <td data-label="CONTACT NO">
                          <div className="contact-with-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            {application.contact}
                          </div>
                        </td>
                      )}
                      {shouldRenderColumn("position") && (
                        <td data-label="POSITION">
                          <div className="position-column-content" title={application.jobTitle}>
                            {application.jobTitle}
                          </div>
                        </td>
                      )}
                      {shouldRenderColumn("resume") && (
                        <td data-label="RESUME">
                          {resumeUrl ? (
                            <a 
                              href={resumeUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="view-resume-link"
                              aria-label="View resume"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                              {windowWidth > 480 && <span style={{ marginLeft: "5px" }}>View</span>}
                            </a>
                          ) : (
                            <span className="no-resume">Not available</span>
                          )}
                        </td>
                      )}
                    </tr>
                    {expandedRowId === index && (
                      <tr className="details-row">
                        <td colSpan={7}>
                          <div className="details-panel">
                            <div className="details-header">
                              <h3>Details for {displayIndex} {application.name}</h3>
                              <button 
                                className="close-details"
                                onClick={() => setExpandedRowId(null)}
                                aria-label="Close details"
                              >
                                ✕
                              </button>
                            </div>
                            <div className="details-content">
                              <div className="details-grid">
                                <div className="details-row">
                                  <div className="details-label">Id:</div>
                                  <div className="details-value">{displayIndex}</div>
                                </div>
                                <div className="details-row">
                                  <div className="details-label">Followup:</div>
                                  <div className="details-value">
                                    <select 
                                      value={statusChanges[application._id] || application.followupStatus || "Unread"}
                                      onChange={(e) => handleStatusChange(application._id, e.target.value)}
                                      disabled={savingId === application._id}
                                    >
                                      <option>Unread</option>
                                      <option>Reviewed</option>
                                      <option>Shortlisted</option>
                                      <option>Interviewed</option>
                                      <option>Rejected</option>
                                      <option>Hired</option>
                                    </select>
                                    {savingId === application._id && <span className="saving-indicator">Saving...</span>}
                                  </div>
                                </div>
                                <div className="details-row">
                                  <div className="details-label">Name:</div>
                                  <div className="details-value">{application.name}</div>
                                </div>
                                <div className="details-row">
                                  <div className="details-label">Email:</div>
                                  <div className="details-value">{application.email}</div>
                                </div>
                                <div className="details-row">
                                  <div className="details-label">Contact No:</div>
                                  <div className="details-value">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    {application.contact}
                                  </div>
                                </div>
                                <div className="details-row">
                                  <div className="details-label">Message:</div>
                                  <div className="details-value">{application.message || "No message provided"}</div>
                                </div>
                                <div className="details-row">
                                  <div className="details-label">Datetime:</div>
                                  <div className="details-value">{application.createdAt ? new Date(application.createdAt).toLocaleString() : ""}</div>
                                </div>
                                <div className="details-row">
                                  <div className="details-label">Resume:</div>
                                  <div className="details-value">
                                    {resumeUrl ? (
                                      <div>
                                        <a 
                                          href={resumeUrl}
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="view-resume-link details-resume-link"
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                          </svg>
                                          View Resume
                                        </a>
                                      </div>
                                    ) : (
                                      <span className="no-resume">Not available</span>
                                    )}
                                  </div>
                                </div>
                                <div className="details-row">
                                  <div className="details-label">Spam Filter:</div>
                                  <div className="details-value">
                                    <select 
                                      value={spamChanges[application._id] !== undefined ? 
                                        (spamChanges[application._id] ? "Spam" : "Not Spam") : 
                                        (application.isSpam ? "Spam" : "Not Spam")
                                      }
                                      onChange={(e) => handleSpamChange(application._id, e.target.value)}
                                      disabled={savingId === application._id}
                                    >
                                      <option>Spam</option>
                                      <option>Not Spam</option>
                                    </select>
                                    {savingId === application._id && <span className="saving-indicator">Saving...</span>}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="no-data">
                  No applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination-container">
        <div className="page-info">
          Showing page {currentPage} of {totalPages || 1}
        </div>
        <div className="pagination">
          <button 
            className="page-btn prev" 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <button className="page-btn active">
            {currentPage}
          </button>
          <button 
            className="page-btn next"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerApplications;