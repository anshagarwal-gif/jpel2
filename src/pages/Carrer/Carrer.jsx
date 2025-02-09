import React, { useState } from 'react';
import "../Carrer/Carrer.css"

const Career = () => {
  const [openJob, setOpenJob] = useState('Customer Service and Spare Parts Manager');

  const jobDetails = {
    'Customer Service and Spare Parts Manager': {
      profile: [
        'Providing technical assistance to the customer once the machine is dispatched for installation',
        'Ensuring the customer site is ready and all installation pre-requisites are met, and planning accordingly for deputing the necessary manpower/engineer for installation',
        'Courteous communication with the customer via telephone, email or video call and assisting with any technical, mechanical or electrical problems arising in the machine',
        'Maintaining the appropriate records of discussion and correspondence with the customers',
        'Arranging procurement and timely delivery of spare parts by close coordination with the production team and store management',
        'Know thoroughly about the company\'s products and keeping up to date about any changes or updates',
        'Leading the team of service engineers and providing them appropriate instructions and training for courteous dealing with the customers',
        'Deputing service engineer at the customer\'s location and analysing his daily activity field reports and guide him accordingly',
        'Analysing and reviewing service engineer\'s reports made during the customer visit and discuss problems, solutions to close the customer complaint',
        'Managing and reviewing monthly reports of customer\'s complaints and the deployed solutions along with service reports with the higher management',
        'Managing monthly reports of spare parts procured, supplied to the customers, including payment and delivery',
        'Managing quotation, delivery and payments of the spare parts and the service visit charges from the customer'
      ],
      skills: [
        'Minimum 10 to 12 years of experience in relevant field preferably in machine manufacturing industry',
        'Good communication and managerial skills required',
        'Diploma/BE or ME Mechanical engineer or equivalent',
        'Good experience with managing customer relations',
        'Good computer skills required including Microsoft office and ERP system',
        'Flexible and self-motivated individual with a positive and proactive approach',
        'Excellent organizational and time management skills'
      ]
    }
  };

  const openings = [
    'Customer Service and Spare Parts Manager',
    'Dispatch Assistant',
    'Technical Writer & Product Marketing',
    'Electrical Supervisor for Motor Manufacturing',
    'Mechanical Design Engineer',
    'Sales & Marketing – Tamil Nadu (South)',
    'Service Engineer – Madhya Pradesh',
    'Service Engineer – Morbi, Gujarat',
    'Service Manager',
    'QC Engineer',
    'Sales & Marketing - International Market',
    'Draughtsman-Mechanical'
  ];

  return (
    <div>
      <div className="imageContainer3">
        <img
          className="ExportSection1"
          alt="ExportSection"
          src={require('./Assets/bannermain.jpg')}
        />
      </div>

      <div className='carrerdivider'></div>

      <div className="career-container">
        <h1>CURRENT OPENINGS</h1>
        <div className="openings-list">
          {openings.map((job) => (
            <div 
              key={job} 
              className="job-item"
              onClick={() => setOpenJob(job === openJob ? null : job)}
            >
              <div className="job-header">
                <span>{job}</span>
                <span className="toggle-icon">{openJob === job ? '−' : '+'}</span>
              </div>
              {openJob === job && (
                <div className="job-details">
                  {jobDetails[job] ? (
                    <>
                      <div className="section">
                        <h3>JOB PROFILE:</h3>
                        <ul>
                          {jobDetails[job].profile.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="section">
                        <h3>SKILLS REQUIRED:</h3>
                        <ul>
                          {jobDetails[job].skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <div className="section">
                      <p>Details coming soon...</p>
                    </div>
                  )}
                  <button className="apply-now-btn">APPLY NOW</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='carrerdivider'></div>
      </div>
    </div>
  );
};

export default Career;