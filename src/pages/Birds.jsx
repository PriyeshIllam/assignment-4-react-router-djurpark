import { useParams, useNavigate } from 'react-router-dom';
import animals from '../data/animals';
import { useState } from 'react';
import AnimalDetailModal from '../modals/AnimalDetailModal';
import '../styles/Group.css';

const Birds = () => {
  const { animalName } = useParams();
  const navigate = useNavigate();
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const birds = animals.filter(a => a.group === 'bird');

  const animalFromUrl = animalName
    ? animals.find(a => a.name.toLowerCase() === decodeURIComponent(animalName).toLowerCase())
    : null;

  const handleSeeDetails = (animal) => {
    setSelectedAnimal(animal);
  };

  const modalAnimal = animalFromUrl || selectedAnimal;

  const handleClose = () => {
    if (animalFromUrl) {
      navigate('/birds'); // Go back to the birds group page
    } else {
      setSelectedAnimal(null); // Close the modal from state
    }
  };

  return (
    <div className="group-page">
      <h2 className="page-title">Birds</h2>
      <p className="page-description">
        Birds are warm-blooded animals with feathers and wings. Most birds can fly, and they lay eggs. 
        They have beaks and a lightweight skeleton suited for aerial movement.
      </p>

      <div className="animal-cards">
        {birds.map(animal => (
          <div className="animal-card" key={animal.name}>
            <img src={animal.image} alt={animal.name} className="animal-image" />
            <div className="animal-info">
              <div className="animal-name">{animal.name}</div>
              <p className="animal-description">
                {animal.description.length > 100
                  ? animal.description.slice(0, 100) + '...'
                  : animal.description}
              </p>
              <button
                className="details-btn"
                onClick={() => handleSeeDetails(animal)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalAnimal && (
        <AnimalDetailModal
          animal={modalAnimal}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Birds;
