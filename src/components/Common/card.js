import React from 'react';

const Card = ({
  title,
  value,
  percentage,
  description,
  additionalInfo,
  color,
  children,
}) => {
  return (
    <div className="card" style={{ borderColor: color || '#005EEF' }}>
      <div className="card-header">
        <span className="card-title">{title}</span>
        <span className="card-value">{value}</span>
      </div>
      <div className="card-content">
        {percentage && <span className="card-percentage">{percentage}</span>}
        {description && <span className="card-description">{description}</span>}
      </div>
      {additionalInfo && (
        <div className="card-footer">
          <span className="card-additional-info">{additionalInfo}</span>
        </div>
      )}
      {children && <div className="card-children">{children}</div>}
    </div>
  );
};

export default Card;
