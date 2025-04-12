import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import axios from "axios";
import CareerApplications from "./AdminCarrer";
import CatalogSubmissions from "./CatalogSubmissions"; // Import the new component

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("contactus");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState(null);
  const recordsPerPage = 10;
// Inside your component, add state for tracking changes
const [statusChanges, setStatusChanges] = useState({});
const [spamChanges, setSpamChanges] = useState({});
const [savingId, setSavingId] = useState(null);
const [viewingSpam, setViewingSpam] = useState(false);
const [spamCount, setSpamCount] = useState(0);


// Add this function to toggle between normal and spam view
const toggleSpamView = async () => {
  try {
    
    if (!viewingSpam) {
      // Switching to spam view
      
      const spamRes = await axios.get("http://localhost:5000/api/inquiries/spam");
    
      setInquiries(spamRes.data);
    } else {
      
      // Switching back to normal view
      const res = await axios.get("http://localhost:5000/api/inquiries");
     
      setInquiries(res.data);
    }
    setViewingSpam(!viewingSpam);
    setCurrentPage(1); // Reset to first page when toggling views
  } catch (error) {
    console.error("Error toggling spam view:", error);
  }
};
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/inquiries");
      setInquiries(res.data);
      
      const spamCountRes = await axios.get("http://localhost:5000/api/inquiries/spam/count");
      setSpamCount(spamCountRes.data.count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, []);

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
  

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleRowExpand = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  const saveChanges = async (id, changes) => {
    try {
      setSavingId(id);
      await axios.patch(`http://localhost:5000/api/inquiries/${id}`, changes);
      // Optional: Update the local data to reflect the change
      setInquiries(inquiries.map(inquiry => 
        inquiry._id === id ? { ...inquiry, ...changes } : inquiry
      ));
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Failed to save changes. Please try again.");
    } finally {
      setSavingId(null);
    }
  };
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/inquiries");
        setInquiries(res.data);
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    };
    fetchInquiries();
  }, []);

  // Filter inquiries based on search term
  const filteredInquiries = inquiries.filter(inquiry => 
    inquiry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.contactNo?.includes(searchTerm)
  );

  // Pagination
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredInquiries.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredInquiries.length / recordsPerPage);

  // Export functions
  const exportToCSV = () => {
    // CSV header
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Add header row
    csvContent += "Name,Email,Contact Number\n";
    
    // Add data rows - using only actual data from inquiries, no default values
    filteredInquiries.forEach(item => {
      // Make sure we're only using actual data from the inquiries array
      // Properly escape fields for CSV format
   
      const name = item.name ? `"${item.name.replace(/"/g, '""')}"` : "";
      const email = item.email ? `"${item.email.replace(/"/g, '""')}"` : "";
      const contactNo =  item.contactNumber ;
      
      // Add row to CSV
      csvContent += `${name},${email},${contactNo}\n`;
    });
    
    // Create and trigger download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "contact_inquiries.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Render content based on active menu item
  const renderContent = () => {
    switch(activeItem) {
      case "contactus":
        return (
          <div className="dashboard-content contact-page">
            <header className="content-header">
            <div className="page-title">
  <h1>
    <span className="brand">Jpel</span>
    <span className="separator">::</span>
    <span>Contact Us</span>
    {viewingSpam && <span className="spam-title-highlight"> - Spam Records</span>}
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
                  </tr>
                </thead>
                <tbody>
                  {currentRecords.length > 0 ? (
                    currentRecords.map((inquiry, index) => (
                      <React.Fragment key={inquiry.id || index}>
                        <tr className={expandedRow === (inquiry.id || index) ? "expanded-row" : ""}>
                          <td className="add-row">
                            <button 
                              className={`add-button ${expandedRow === (inquiry.id || index) ? "expanded" : ""}`}
                              onClick={() => toggleRowExpand(inquiry.id || index)}
                            >
                              {expandedRow === (inquiry.id || index) ? "-" : "+"}
                            </button>
                            {inquiry.id || index + 1}
                          </td>
                          <td>
  <div className="status-dropdown">
    <select 
      value={statusChanges[inquiry._id] || inquiry.followupStatus || "Pending"}
      onChange={(e) => handleStatusChange(inquiry._id, e.target.value)}
      disabled={savingId === inquiry._id}
    >
      <option>Read</option>
      <option>Pending</option>
      <option>Contacted</option>
      <option>No Response</option>
    </select>
    {savingId === inquiry._id && <span className="saving-indicator">Saving...</span>}
  </div>
</td>
                          <td>{inquiry.name}</td>
                          <td>{inquiry.email}</td>
                          <td>
                            <div className="contact-with-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                              </svg>
                              {inquiry.contactNumber}
                            </div>
                          </td>
                        </tr>
                        {expandedRow === (inquiry.id || index) && (
                          <tr className="details-row">
                            <td colSpan="5">
                              <div className="details-panel">
                                <div className="details-header">
                                  <h3>Details for {inquiry.id || index + 1} {inquiry.name}</h3>
                                  <button className="close-details" onClick={() => setExpandedRow(null)}>×</button>
                                </div>
                                <div className="details-content">
                                  <div className="details-grid">
                                    <div className="details-row">
                                      <div className="details-label">Id:</div>
                                      <div className="details-value">{inquiry.id || index + 1}</div>
                                    </div>
                                    <div className="details-row">
  <div className="details-label">Followup:</div>
  <div className="details-value">
    <select 
      value={statusChanges[inquiry._id] || inquiry.followupStatus || "Pending"}
      onChange={(e) => handleStatusChange(inquiry._id, e.target.value)}
      disabled={savingId === inquiry._id}
    >
      <option>Read</option>
      <option>Pending</option>
      <option>Contacted</option>
      <option>No Response</option>
    </select>
    {savingId === inquiry._id && <span className="saving-indicator">Saving...</span>}
  </div>
</div>
                                    <div className="details-row">
                                      <div className="details-label">Name:</div>
                                      <div className="details-value">{inquiry.name}</div>
                                    </div>
                                    <div className="details-row">
                                      <div className="details-label">Email:</div>
                                      <div className="details-value">{inquiry.email}</div>
                                    </div>
                                    <div className="details-row">
                                      <div className="details-label">Contact No:</div>
                                      <div className="details-value">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                        {inquiry.contactNumber}
                                      </div>
                                    </div>
                                    <div className="details-row">
                                      <div className="details-label">Message:</div>
                                      <div className="details-value">
                                        {inquiry.message }
                                      </div>
                                    </div>
                               
                                    <div className="details-row">
                                      <div className="details-label">Datetime:</div>
                                      <div className="details-value">{inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleString() : ""}</div>
                                    </div>
                                    <div className="details-row">
  <div className="details-label">Spam Filter:</div>
  <div className="details-value">
    <select 
      value={spamChanges[inquiry._id] !== undefined ? 
        (spamChanges[inquiry._id] ? "Spam" : "Not Spam") : 
        (inquiry.isSpam ? "Spam" : "Not Spam")
      }
      onChange={(e) => handleSpamChange(inquiry._id, e.target.value)}
      disabled={savingId === inquiry._id}
    >
      <option>Spam</option>
      <option>Not Spam</option>
    </select>
    {savingId === inquiry._id && <span className="saving-indicator">Saving...</span>}
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
                      <td colSpan="5" className="no-data">
                        No contact inquiries found
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
      
      case "career":
        return <CareerApplications />;
      
        case "catalogue":
          return <CatalogSubmissions />;
      
      default:
        return null;
    }
  };

  return (
    <div className={`admin-dashboard ${collapsed ? "sidebar-collapsed" : ""}`}>
      {/* Mobile Menu Toggle */}
      <div className="mobile-header">
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <h1>Jpel</h1>
        <div className="mobile-profile">
          <img src="https://via.placeholder.com/40" alt="Profile" />
        </div>
      </div>

      {/* Left Navigation Panel */}
      <aside className={`dashboard-sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            {!collapsed && <span>Jpel</span>}
          </div>
          <button className="collapse-button" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="close-mobile-menu" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li className={activeItem === "contactus" ? "active" : ""} onClick={() => setActiveItem("contactus")}>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {!collapsed && <span>Contact Us</span>}
              </a>
            </li>
            <li className={activeItem === "career" ? "active" : ""} onClick={() => setActiveItem("career")}>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                {!collapsed && <span>Career</span>}
              </a>
            </li>
            <li className={activeItem === "catalogue" ? "active" : ""} onClick={() => setActiveItem("catalogue")}>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                  <line x1="9" y1="11" x2="15" y2="11"></line>
                </svg>
                {!collapsed && <span>Download Catalogue</span>}
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          {!collapsed && (
            <div className="user-info">
              <img src="https://via.placeholder.com/40" alt="User" />
              <div>
                <p className="user-name">Admin User</p>
                <p className="user-role">Administrator</p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="user-avatar-only">
              <img src="https://via.placeholder.com/40" alt="User" />
            </div>
          )}
          <button className="logout-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area - Conditionally rendered based on activeItem */}
      <main className="dashboard-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;