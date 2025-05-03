import animals from '../data/animals';
import { useState } from 'react';
import AnimalDetailModal from '../modals/AnimalDetailModal';
import '../styles/Group.css';  // Importing the CSS for Mammals page

const Mammals = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const mammals = animals.filter(a => a.group === 'mammal');

  return (
    <div className="group-page">
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
                onClick={() => setSelectedAnimal(animal)}
              >
                See Details
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

export default Mammals;
