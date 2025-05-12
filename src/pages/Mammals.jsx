import { useParams, useNavigate } from 'react-router-dom';
import animals from '../data/animals';
import { useState, useEffect } from 'react';
import AnimalDetailModal from '../modals/AnimalDetailModal';
import '../styles/Group.css';

const Mammals = () => {
  const { animalName } = useParams();
  const navigate = useNavigate();
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const mammals = animals.filter(a => a.group === 'mammal');

  // When a URL param is present, show the animal based on it
  const animalFromUrl = animalName
    ? animals.find(a => a.name.toLowerCase() === decodeURIComponent(animalName).toLowerCase())
    : null;

  // Ensure that clicking "See Details" sets selectedAnimal for modal
  const handleSeeDetails = (animal) => {
    setSelectedAnimal(animal);
  };

  // Determine what to show in the modal
  const modalAnimal = animalFromUrl || selectedAnimal;

  // Handle closing based on how modal was opened
  const handleClose = () => {
    if (animalFromUrl) {
      navigate('/mammals'); // Go back to the group page
    } else {
      setSelectedAnimal(null); // Just close the modal from state
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className="group-page" style={{ flex: 1 }}>
        <h2 className="page-title">Mammals</h2>
        <p className="page-description">
          Mammals are warm-blooded animals with fur or hair. Many give birth to live young.
          Explore some of the fascinating mammals native to Australia.
        </p>

        <div className="animal-cards">
          {mammals.map(animal => (
            <div key={animal.name} className="animal-card">
              <img src={animal.image} alt={animal.name} className="animal-image" />
              <div className="animal-info">
                <h3 className="animal-name">{animal.name}</h3>
                <p className="animal-description">{animal.description.slice(0, 100)}...</p>
                <button
                  className="details-btn"
                  onClick={() => handleSeeDetails(animal)}
                >
                  See Details
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
    </div>
  );
};

export default Mammals;
