import React, { useState } from 'react';
import "../Carrer/Carrer.css";

const Career = () => {
  const [openJob, setOpenJob] = useState(null); // Changed to null so no job is open by default
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  // Job details object
  const jobDetails = {
    'Customer Service and Spare Parts Manager': {
      profile: [
       'Providing technical assistance to the customer once the machine is dispatched for installation',  
'Ensuring the customer site is ready and all installation pre-requisites are met, and planning accordingly for deputing the necessary manpower/engineer for installation',  
'Courteous communication with the customer via telephone, email or video call and assisting with any technical, mechanical or electrical problems arising in the machine',  
'Maintaining the appropriate records of discussion and correspondence with the customers',  
'Arranging procurement and timely delivery of spare parts by close coordination with the production team and store management',  
'Know thoroughly about the company’s products and keeping up to date about any changes or updates',  
'Leading the team of service engineers and providing them appropriate instructions and training for courteous dealing with the customers',  
'Deputing service engineer at the customer’s location and analysing his daily activity field reports and guide him accordingly',  
'Analysing and reviewing service engineer’s reports made during the customer visit and discuss problems, solutions to close the customer complaint',  
'Managing and reviewing monthly reports of customer’s complaints and the deployed solutions along with service reports with the higher management',  
'Managing monthly reports of spare parts procured, supplied to the customers, including payment and delivery',  
'Managing quotation, delivery and payments of the spare parts and the service visit charges from the customer',  
'Minimum 10 to 12 years of experience in relevant field preferably in machine manufacturing industry',  
'Good communication and managerial skills required',  
'Diploma/BE or ME Mechanical engineer or equivalent',  
'Good experience with managing customer relations',  
'Good computer skills required including Microsoft office and ERP system',  
'Flexible and self-motivated individual with a positive and proactive approach',  
'Excellent organizational and time management skills'  

      ],
      skills: [
       'Minimum 10 to 12 years of experience in relevant field preferably in machine manufacturing industry',  
'Good communication and managerial skills required',  
'Diploma/BE or ME Mechanical engineer or equivalent',  
'Good experience with managing customer relations',  
'Good computer skills required including Microsoft office and ERP system',  
'Flexible and self-motivated individual with a positive and proactive approach',  
'Excellent organizational and time management skills',  
      ]

    },
    'Dispatch Assistant': {
      profile: [
        'Communicate with the customer regarding the readiness of the machinery via telephone and email and request timely payment',  
'Communicate with transporters regarding booking of vehicles',  
'Communication with the production department for timely dispatch',  
'Maintain dispatch planning schedule well in advance',  
'Prepare packing list of machines',  
'Prepare invoices, e-way bill and documentation needed for dispatch',  
'Prepare any export/domestic documentation related to our orders',  

      ],
      skills: [
        'Minimum 2 to 5 years of experience in relevant field',  
'Good communication and English skills required',  
'Graduate or equivalent required',  
'Basic Computer skills required including Microsoft office and Email',  
'Good knowledge of different dimensions of machines and types of vehicles',  
'Flexible and self-motivated individual with a positive approach',  
'Excellent time management skills',  
'Apply only if you are willing to move to Ankleshwar, Gujarat',  

      ]
    },
    'Technical Writer & Product Marketing': {
      profile: [
'Create and manage technical documentation of all our JP Group products & machinery – The documentation includes any form of printed material, electronic material, catalogues, flyers, infographics, operating manuals and other forms of documentation',  
'Collaborate with internal team - Production, Testing, Marketing and R&D department to obtain an in-depth understanding of our products and the documentation requirements',  
'Write easy to understand documentation of operation of the machines using proper graphics, images and texts',  
'Ensure that each document is well structured and grammatically correct',  
'Ensure right document is delivered to the customer for each machine',  
'Make promotional content of our products with appropriate content and images',  
'Market our products on our website, social media and mass communication emails',  
'Work with minimum supervision in a fast-paced dynamic environment',  

      ],
      skills: [
        'Minimum 2 to 3 years of experience in preparation of technical documents preferably for an engineering company',  
'Good communication and excellent English skills required',  
'Graduate or equivalent required. Engineering background is a Plus',  
'Excellent skills required for Microsoft office (Word, Excel and PowerPoint)',  
'Excellent skills needed in Adobe Photoshop, Illustrator, Corel Draw and other designing & editing tools',  
'Flexible and self-motivated individual with a positive mindset',  
'Should be able to conceptualize & transform ideas into effective communication',  
'Creativity and out of the box thinking is needed',  
'Average understanding of video and sound editing is a bonus',  
'Excellent time management skills',  
'Apply only if you are ready to relocate to Ankleshwar, Gujarat',  

      ]
    },
    'Electrical Supervisor for Motor Manufacturing': {
      profile: [
        'Supervising motor manufacturing operations',
        'Quality control of electrical components',
        'Team management and training',
        'Production planning and scheduling',
        'Troubleshooting electrical issues',
        'Maintaining production records'
      ],
      skills: [
        'Diploma/Degree in Electrical Engineering',
        '5-7 years experience in motor manufacturing',
        'Strong knowledge of electrical systems',
        'Team management experience',
        'Quality control expertise',
        'Problem-solving abilities'
      ]
    },
    'Mechanical Design Engineer': {
      profile: [
       'Create BOM for all the existing and new machines as per requirement',  
'Create 3D models and CAD assembly drawings of all the machine components and equipment',  
'Understand all our products designs, specifications and features and suggest improvements and modifications accordingly',  
'To coordinate with the production and assembly team to check the working of the machines and improve its design',  
'Provide technical assistance and improvements to the trial and testing department and to the service engineers for any issues related to machine design',  
'Create and update database of all the machine designs and standardize them according to its models for future reference'  

      ],
      skills: [
        'Minimum 3 to 8 years of experience in creating 3D models and CAD drawings of machinery in an Engineering company preferably Machine Manufacturing industry',  
'Must be proficient in using AutoCAD',  
'Good communication and team-work skills',  
'Graduate or equivalent in Mechanical/Design Engineering',  
'Good knowledge of manufacturing processes, fabrication and assembly',  
'Flexible and self-motivated individual with a positive mindset',  
'Excellent time management skills',  
'Apply only if you are ready to relocate to Ankleshwar, Gujarat'  

      ]
    },
    
    'Service Engineer' : {
      profile: [
    'Do erection and commissioning of our machineries at customer site in region Madhya Pradesh and around',  
'Report to customer site for any customer complaints related to machines',  
'Do regular visits on customer site for any preventive maintenance as and when required',  
'Send service reports to head office'  


      ],
      skills: [
        'Minimum 4 to 5 years of experience in service & maintenance in the plastics industry specifically in similar products that we make',  
'Good know-how of woven sacks, flexible packaging, extrusion coating industry',  
'Good service and maintenance experience of circular looms, tape plant, lamination, recycling and converting machines',  
'Based in Indore Madhya Pradesh or willing to permanently relocate there',  
'Good communication and customer-handling skills'  


      ]
    },
   
    
    
    
    'QC Engineer': {
      profile: [
       'Create and manage technical documentation and reports for Quality Analysis and Quality Control of parts and assemblies',  
'QC Material Inspection of incoming and outgoing material',  
'Ensure and verify quality of all the raw materials to be used in manufacturing process',  
'Communicate with the suppliers in case of improper quality of incoming materials',  
'Effectively manage QC and storage/retrieval of incoming/outgoing parts',  
'Collaborate with internal team – Design, Production, or Testing department regarding mechanical assemblies and parts',  
'Work with minimum supervision in a fast-paced dynamic environment'  

      ],
      skills: [
    'Minimum 7 to 10 years of experience in QA/QC department of an engineering company',  
'Good knowledge and capable of understanding engineering drawings',  
'Good knowledge of Sheet metal and fabrication techniques',  
'Good communication skills required',  
'ITI Diploma or Graduate',  
'Good skills required for Microsoft office Word and Excel',  
'Flexible and self-motivated individual with a positive mindset',  
'Excellent time management skills',  
'Apply only if you are ready to relocate to Ankleshwar Gujarat'  

      ]
    },
    'Sales & Marketing - International Market': {
      profile: [
        'Market our company’s products in South-east Asia Africa South America',  
'Conduct market research and study peers',  
'Communicate with target audiences and build & develop customer relationships',  
'Bring in Sales from the above regions',  
'Submit weekly marketing reports to head office'  

      ],
      skills: [
       'Minimum 7 to 10 years of experience in marketing & sales in plastics industry specifically in similar products that we make',  
'Good know-how of woven sacks flexible packaging extrusion coating industry',  
'Passion for Sales',  
'High level of communication and networking skills',  
'Good grasp on English',  
'Graduate or equivalent',  
'Flexible and self-motivated individual with a positive mindset'  

      ]
    },
    'Draughtsman-Mechanical': {
      profile: [
      'Research and draft blueprints engineering plans and graphics',  
'Use design software to develop models and drawings of new products',  
'Maintain existing engineering records and designs',  
'Supervise the manufacturing process of all designs',  
'Coordinate with other engineers management and the other/creative department',  
'Improving existing product designs and analyze working concepts launched by competitors of similar products to match quality and performance',  
'Identify solutions to improve production efficiency',  
'Create design concepts and 2D/3D drawings to determine the best product'  

      ],
      skills: [
        'ITI Diploma or Bachelor’s degree or equivalent',  
'A minimum of 3 years experience in a similar role',  
'Math skills and attention to detail',  
'A strong knowledge of computer assisted design CAD 2D and 3D design software Solid edge Proficient in MS Office and popular design softwares',  
'Ability to multitask and manage time effectively'  

      ]
    }
  };

  const openings = [
    'Customer Service and Spare Parts Manager',
    'Dispatch Assistant',
    'Technical Writer & Product Marketing',
    'Electrical Supervisor for Motor Manufacturing',
    'Mechanical Design Engineer',
    'Service Engineer',
    'QC Engineer',
    'Sales & Marketing - International Market',
    'Draughtsman-Mechanical'
  ];

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("jobTitle", selectedJob);
    try {
      const res = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      alert(data.message);
      setShowForm(false);
    } catch (err) {
      alert("Submission failed. Try again.");
    }
  };

  return (
    <div className="career-page">
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
                      <button className="apply-now-btn" onClick={() => handleApplyNow(job)}>APPLY NOW</button>
                    </>
                  ) : (
                    <div className="section">
                      <p>Details coming soon...</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="application-form">
            <h2>APPLYING FOR: <span className="job-title">{selectedJob}</span></h2>
            <p className="form-instruction">Request you to kindly fill all the required details.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-columns">
                <div className="form-column">
                  <div className="form-group">
                    <input type="text" placeholder="Name" name='name' required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Email ID" name='email' required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Contact No" name='contact' required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Qualification" name='qualification' required />
                  </div>
                </div>
                
                <div className="form-column">
                  <div className="form-group">
                    <input   type="file"
  id="resume"
  name="resume"
  className="resume-upload"
  accept=".pdf,.doc,.docx"
  required />
                    <label htmlFor="resume" className="file-label">Upload Resume</label>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Message" rows="6" name='message' required></textarea>
                  </div>
                </div>
              </div>
              
              <div className="form-actions">
                <button type="submit" className="send-message-btn">SEND MESSAGE</button>
                <button type="button" className="close-form-btn" onClick={() => setShowForm(false)}>✕</button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <div className='carrerdivider'></div>
    </div>
  );
};

export default Career;