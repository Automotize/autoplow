import React from 'react';
// This is ther component used to render the spinner (while waiting for page to load render this)
// Styling is found in the sass folder
const Spinner = () => {
  return (
    <div className="spinner__container">
      <div className="spinner" />
    </div>
  );
};

export default Spinner;
