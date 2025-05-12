import { useParams, useNavigate } from 'react-router-dom';
import animals from '../data/animals';
import { useState } from 'react';
import AnimalDetailModal from '../modals/AnimalDetailModal';
import '../styles/Group.css';

const Reptiles = () => {
  const { animalName } = useParams();
  const navigate = useNavigate();
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const reptiles = animals.filter(a => a.group === 'reptile');

  const animalFromUrl = animalName
    ? animals.find(a => a.name.toLowerCase() === decodeURIComponent(animalName).toLowerCase())
    : null;

  const handleSeeDetails = (animal) => {
    setSelectedAnimal(animal);
  };

  const modalAnimal = animalFromUrl || selectedAnimal;

  const handleClose = () => {
    if (animalFromUrl) {
      navigate('/reptiles');
    } else {
      setSelectedAnimal(null);
    }
  };

  return (
    <div className="group-page">
      <h2 className="page-title">Reptiles</h2>
      <p className="page-description">
        Reptiles are cold-blooded vertebrates that include snakes, lizards, turtles, and crocodiles.
        They typically have dry, scaly skin and most lay eggs, though some give birth to live young.
      </p>

      <div className="animal-cards">
        {reptiles.map(animal => (
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

export default Reptiles;
