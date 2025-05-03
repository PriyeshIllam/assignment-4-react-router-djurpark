import animals from '../data/animals';
import { useState } from 'react';
import AnimalDetailModal from '../modals/AnimalDetailModal';
import '../styles/Group.css';

const Birds = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const birds = animals.filter(a => a.group === 'bird');

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
                onClick={() => setSelectedAnimal(animal)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedAnimal && (
        <AnimalDetailModal
          animal={selectedAnimal}
          onClose={() => setSelectedAnimal(null)}
        />
      )}
    </div>
  );
};

export default Birds;
