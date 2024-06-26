
import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, recipe }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{recipe.title}</h2>
        <img src={recipe.image_url} alt={recipe.title} />
        <p><strong>Publisher:</strong> {recipe.publisher}</p>
        <p><strong>Source URL:</strong> <a href={recipe.source_url} target="_blank" rel="noopener noreferrer">{recipe.source_url}</a></p>
      </div>
    </div>
  );
};

export default Modal;
