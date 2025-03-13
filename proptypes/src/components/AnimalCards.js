import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({ name, scientificName, size, diet, additional }) {
  const showAdditionalData = () => {
    if (!additional) return;
    const additionalInfo = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(additionalInfo);
  };

  return (
    <div className="animal-card">
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <p>Size: {size} kg</p>
      <p>Diet: {Array.isArray(diet) ? diet.join(', ') : 'Unknown'}</p>
      <button onClick={showAdditionalData}>More Info</button>
    </div>
  );
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string), 
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
};

AnimalCard.defaultProps = {
  diet: [], 
  additional: {
    notes: 'Không có thông tin bổ sung',
  },
};
