import React, { useState, useEffect } from "react";
import "./AdminCarrer.css";
import axios from "axios";

const CareerApplications = () => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRowId, setExpandedRowId] = useState(null);
  const recordsPerPage = 10;
  // Inside your CareerApplications component, add these states and handlers
const [statusChanges, setStatusChanges] = useState({});
const [spamChanges, setSpamChanges] = useState({});
const [savingId, setSavingId] = useState(null);
const [viewingSpam, setViewingSpam] = useState(false);
const [spamCount, setSpamCount] = useState(0);
const toggleSpamView = async () => {
  try {
    if (!viewingSpam) {
      // Switch to spam view
      const res = await axios.get("http://localhost:5000/api/admin/applications?spam=true");
      setApplications(res.data);
    } else {
      // Switch back to normal view
      const res = await axios.get("http://localhost:5000/api/admin/applications");
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
    await axios.patch(`http://localhost:5000/api/admin/applications/${id}`, changes);
    
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

useEffect(() => {
  const fetchData = async () => {
    try {
      // Fetch applications based on current view
      const applicationsRes = await axios.get(
        viewingSpam 
          ? "http://localhost:5000/api/admin/applications?spam=true"
          : "http://localhost:5000/api/admin/applications"
      );
      setApplications(applicationsRes.data);
      
      // Fetch spam count
      const spamCountRes = await axios.get("http://localhost:5000/api/admin/applications/spam/count");
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

  // Pagination
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredApplications.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredApplications.length / recordsPerPage);

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
    filteredApplications.forEach(item => {
      const name = item.name ? `"${item.name.replace(/"/g, '""')}"` : "";
      const email = item.email ? `"${item.email.replace(/"/g, '""')}"` : "";
      const contactNo = item.contact || "";
      const position = item.jobTitle ;
      const status = item.status || "Unread";
      
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
              <th className="id-column">
                ID
                <span className="sort-icon">↕</span>
              </th>
              <th className="followup-column">
                FOLLOWUP
                <span className="sort-icon">↕</span>
              </th>
              <th className="name-column">
                NAME
                <span className="sort-icon">↕</span>
              </th>
              <th className="email-column">
                EMAIL
                <span className="sort-icon">↕</span>
              </th>
              <th className="contact-column">
                CONTACT NO
                <span className="sort-icon">↕</span>
              </th>
              <th className="position-column">
                POSITION
                <span className="sort-icon">↕</span>
              </th>
              <th className="resume-column">
                RESUME
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.length > 0 ? (
              currentRecords.map((application, index) => (
                <React.Fragment key={application.id || index}>
                  <tr>
                    <td className="add-row">
                      <button 
                        className="add-button"
                        onClick={() => toggleExpandRow(application.id || index)}
                      >
                        {expandedRowId === (application.id || index) ? '-' : '+'}
                      </button>
                      {application.id || indexOfFirstRecord + index + 1}
                    </td>
                   <td>
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
                    <td>{application.name}</td>
                    <td>{application.email}</td>
                    <td>
                      <div className="contact-with-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        {application.contact}
                      </div>
                    </td>
                    <td>{application.jobTitle}</td>
                    <td>
                      <a 
                        href={application.resumeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="view-resume-link"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        View
                      </a>
                    </td>
                  </tr>
                  {expandedRowId === (application.id || index) && (
                    <tr className="details-row">
                      <td colSpan="7">
                        <div className="details-panel">
                          <div className="details-header">
                            <h3>Details for {application.id || indexOfFirstRecord + index + 1} {application.name}</h3>
                            <button 
                              className="close-details"
                              onClick={() => setExpandedRowId(null)}
                            >
                              ✕
                            </button>
                          </div>
                          <div className="details-content">

                          <div className="details-grid">
                                    <div className="details-row">
                                      <div className="details-label">Id:</div>
                                      <div className="details-value">{application.id || index + 1}</div>
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
                                <div className="details-value">{application.message || "wertyuiop"}</div>
                              </div>
                              
                              <div className="details-row">
                                      <div className="details-label">Datetime:</div>
                                      <div className="details-value">  {application.createdAt ? new Date(application.createdAt).toLocaleString() : ""}</div>
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
              ))
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