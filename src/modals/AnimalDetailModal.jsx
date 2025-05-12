import { useNavigate } from 'react-router-dom';
import '../styles/AnimalDetailModal.css';

const AnimalDetailModal = ({ animal, onClose }) => {
  if (!animal) return null;

  const handleClick = () => {
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={handleClick} className="close-button">✕</button>
        <h2>{animal.name}</h2>
        <img src={animal.image} alt={animal.name} className="animal-image" />
        <div className="animal-details">
          <p><strong>Description:</strong> {animal.description}</p>
          <p><strong>Diet:</strong> {animal.food}</p>
          <p><strong>Group:</strong> {animal.group}</p>
          <p><strong>Lifespan:</strong> {animal.lifespan}</p>
          <p><strong>Length:</strong> {animal.length}</p>
          <p><strong>Weight:</strong> {animal.weight}</p>
          <p><strong>Found in:</strong> {animal.found}</p>
        </div>
      </div>
    </div>
  );
};


export default AnimalDetailModal;
