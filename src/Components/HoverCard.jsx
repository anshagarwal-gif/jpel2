import React from 'react';
import './HoverCard.css';
const HoverCard = ({
    title = 'Default Title',
    subtitle = 'Default Subtitle',
    phone1,
    phone2,
    phone3,
    emails = [],
    linkText = 'Learn More',
    linkUrl = '#contact',
  }) =>  {
  return (
    <div className="hover-card">
      <h4 className="hover-card-title">{title}</h4>
      <h2 className="hover-card-title">{subtitle}</h2>
      <div className="hover-card-phones">
        {phone1 && <a href={`tel:${phone1}`}>{phone1}</a>}
        {phone2 && <a href={`tel:${phone2}`}>{phone2}</a>}
        {phone3 && <a href={`tel:${phone3}`}>{phone3}</a>}
      </div>
      <div className="hover-card-emails">
        {emails.map((email, index) => (
          <a key={index} href={`mailto:${email}`} className="hover-card-email">
            {email}
          </a>
        ))}
      </div>
      <a href={linkUrl} className="hover-card-link">
        <svg
          className="hover-card-icon"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default HoverCard;
