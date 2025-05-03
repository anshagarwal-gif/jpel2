import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CatalogSubmissions.css";

const CatalogSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRow, setExpandedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");
  const recordsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_API_URL}/api/form/get-submissions`)
      .then((res) => {
        setSubmissions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching submissions:", err);
        setLoading(false);
      });
  }, []);

  const toggleRowExpand = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  // Handle sorting
  const handleSort = (field) => {
    if (sortField === field) {
      // Toggle direction if clicking the same field
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // New field, default to descending
      setSortField(field);
      setSortDirection("desc");
    }
  };

  // Export to CSV function
  const exportToCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Add header row
    csvContent += "Name,Email,Contact Number,City,State,Product Category,Message,Date\n";
    
    // Add data rows
    filteredSubmissions.forEach(item => {
      const name = item.name ? `"${item.name.replace(/"/g, '""')}"` : "";
      const email = item.email ? `"${item.email.replace(/"/g, '""')}"` : "";
      const contactNumber = item.contactNumber ? `"${item.contactNumber}"` : "";
      const city = item.city ? `"${item.city.replace(/"/g, '""')}"` : "";
      const state = item.state ? `"${item.state.replace(/"/g, '""')}"` : "";
      const productCategory = item.productCategory ? `"${item.productCategory.replace(/"/g, '""')}"` : "";
      const message = item.message ? `"${item.message.replace(/"/g, '""')}"` : "";
      const date = item.date ? `"${new Date(item.date).toLocaleString()}"` : "";
      
      // Add row to CSV
      csvContent += `${name},${email},${contactNumber},${city},${state},${productCategory},${message},${date}\n`;
    });
    
    // Create and trigger download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "catalog_submissions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter submissions based on search term
  const filteredSubmissions = submissions.filter(submission => 
    (submission.name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (submission.email?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (submission.contactNumber?.includes(searchTerm)) ||
    (submission.city?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (submission.state?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (submission.productCategory?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Sort submissions
  const sortedSubmissions = [...filteredSubmissions].sort((a, b) => {
    if (!a[sortField]) return 1;
    if (!b[sortField]) return -1;
    
    let comparison = 0;
    if (sortField === "date") {
      comparison = new Date(a[sortField]) - new Date(b[sortField]);
    } else {
      comparison = String(a[sortField]).localeCompare(String(b[sortField]));
    }
    
    return sortDirection === "asc" ? comparison : -comparison;
  });

  // Pagination
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sortedSubmissions.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(sortedSubmissions.length / recordsPerPage);

  return (
    <div className="jpel-catalog-submissions-container">
      <header className="jpel-catalog-header">
        <div className="jpel-page-title">
          <h1>
            <span className="jpel-brand">Jpel</span>
            <span className="jpel-separator">::</span>
            <span>Catalog Submissions</span>
          </h1>
          <p>Manage catalog download requests</p>
        </div>
      </header>

      <div className="jpel-catalog-controls">
        <div className="jpel-control-group">
          <button className="jpel-action-button" onClick={exportToCSV}>Export CSV</button>
        </div>
        <div className="jpel-search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="jpel-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="jpel-data-table-container">
        {loading ? (
          <div className="jpel-loading-indicator">Loading submissions...</div>
        ) : (
          <table className="jpel-catalog-table">
            <thead>
              <tr>
                <th className="jpel-id-column" onClick={() => handleSort("_id")}>
                  ID
                  <span className={`jpel-sort-icon ${sortField === "_id" ? (sortDirection === "asc" ? "jpel-sort-asc" : "jpel-sort-desc") : ""}`}>
                    {sortField === "_id" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
                <th onClick={() => handleSort("name")}>
                  NAME
                  <span className={`jpel-sort-icon ${sortField === "name" ? (sortDirection === "asc" ? "jpel-sort-asc" : "jpel-sort-desc") : ""}`}>
                    {sortField === "name" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
                <th onClick={() => handleSort("email")}>
                  EMAIL
                  <span className={`jpel-sort-icon ${sortField === "email" ? (sortDirection === "asc" ? "jpel-sort-asc" : "jpel-sort-desc") : ""}`}>
                    {sortField === "email" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
                <th onClick={() => handleSort("contactNumber")}>
                  CONTACT NO
                  <span className={`jpel-sort-icon ${sortField === "contactNumber" ? (sortDirection === "asc" ? "jpel-sort-asc" : "jpel-sort-desc") : ""}`}>
                    {sortField === "contactNumber" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
                <th onClick={() => handleSort("productCategory")}>
                  CATEGORY
                  <span className={`jpel-sort-icon ${sortField === "productCategory" ? (sortDirection === "asc" ? "jpel-sort-asc" : "jpel-sort-desc") : ""}`}>
                    {sortField === "productCategory" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
                <th onClick={() => handleSort("date")}>
                  DATE
                  <span className={`jpel-sort-icon ${sortField === "date" ? (sortDirection === "asc" ? "jpel-sort-asc" : "jpel-sort-desc") : ""}`}>
                    {sortField === "date" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.length > 0 ? (
                currentRecords.map((submission, index) => {
                  const displayIndex = indexOfFirstRecord + index + 1;
                  return (
                    <React.Fragment key={submission._id || index}>
                      <tr className={expandedRow === (submission._id || index) ? "jpel-expanded-row" : ""}>
                        <td className="jpel-add-row">
                          <button 
                            className={`jpel-add-button ${expandedRow === (submission._id || index) ? "jpel-expanded" : ""}`}
                            onClick={() => toggleRowExpand(submission._id || index)}
                          >
                            {expandedRow === (submission._id || index) ? "-" : "+"}
                          </button>
                          {displayIndex}
                        </td>
                        <td>{submission.name}</td>
                        <td>{submission.email}</td>
                        <td>
                          <div className="jpel-contact-with-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            {submission.contactNumber}
                          </div>
                        </td>
                        <td>{submission.productCategory || "Manufacturing Range"}</td>
                        <td>{submission.date ? new Date(submission.date).toLocaleDateString() : ""}</td>
                      </tr>
                      {expandedRow === (submission._id || index) && (
                        <tr className="jpel-details-row">
                          <td colSpan="6">
                            <div className="jpel-details-panel">
                              <div className="jpel-details-header">
                                <h3>Details for {submission.name}</h3>
                                <button className="jpel-close-details" onClick={() => setExpandedRow(null)}>×</button>
                              </div>
                              <div className="jpel-details-content">
                                <div className="jpel-details-grid">
                                  <div className="jpel-details-item">
                                    <div className="jpel-details-label">ID:</div>
                                    <div className="jpel-details-value">{submission._id}</div>
                                  </div>
                                  <div className="jpel-details-item">
                                    <div className="jpel-details-label">Name:</div>
                                    <div className="jpel-details-value">{submission.name}</div>
                                  </div>
                                  <div className="jpel-details-item">
                                    <div className="jpel-details-label">Email:</div>
                                    <div className="jpel-details-value">{submission.email}</div>
                                  </div>
                                  <div className="jpel-details-item">
                                    <div className="jpel-details-label">Contact No:</div>
                                    <div className="jpel-details-value">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                      </svg>
                                      {submission.contactNumber}
                                    </div>
                                  </div>
                                  <div className="jpel-details-item">
                                    <div className="jpel-details-label">City:</div>
                                    <div className="jpel-details-value">{submission.city}</div>
                                  </div>
                                  <div className="jpel-details-item">
                                    <div className="jpel-details-label">State:</div>
                                    <div className="jpel-details-value">{submission.state}</div>
                                  </div>
                                  <div className="jpel-details-item">
                                    <div className="jpel-details-label">Product Category:</div>
                                    <div className="jpel-details-value">{submission.productCategory || "Manufacturing Range"}</div>
                                  </div>
                                  <div className="jpel-details-item jpel-details-message">
                                    <div className="jpel-details-label">Message:</div>
                                    <div className="jpel-details-value">
                                      {submission.message || "No message provided"}
                                    </div>
                                  </div>
                                  <div className="jpel-details-item">
                                    <div className="jpel-details-label">IP Address:</div>
                                    <div className="jpel-details-value">{submission.ipAddress || "Not available"}</div>
                                  </div>
                                  <div className="jpel-details-item">
                                    <div className="jpel-details-label">Date:</div>
                                    <div className="jpel-details-value">{submission.date ? new Date(submission.date).toLocaleString() : ""}</div>
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
                  <td colSpan="6" className="jpel-no-data">
                    {searchTerm ? "No matching submissions found" : "No catalog submissions found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      <div className="jpel-pagination-container">
        <div className="jpel-page-info">
          Showing page {currentPage} of {totalPages || 1}
        </div>
        <div className="jpel-pagination">
          <button 
            className="jpel-page-btn jpel-prev" 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <button className="jpel-page-btn jpel-active">
            {currentPage}
          </button>
          <button 
            className="jpel-page-btn jpel-next"
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

export default CatalogSubmissions;