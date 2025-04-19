import { useState } from 'react';
import animals from '../data/animals';
import AnimalDetailModal from '../modals/AnimalDetailModal';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleAnimal = (animal) => {
    if (activeAnimal?.name === animal.name) {
      setActiveAnimal(null);
    } else {
      setActiveAnimal(animal);
    }
  };

  const getShortDesc = (desc) => desc.length > 200 ? desc.slice(0, 200) + '...' : desc;

  return (
    <div>
      {!activeAnimal ? (
        <p>Welcome to the Djurpark Australian Animals Exhibition!</p>
      ) : (
        <div>
          <img src={activeAnimal.image} alt={activeAnimal.name} style={{ width: '150px' }} />
          <h2>{activeAnimal.name}</h2>
          <p>{getShortDesc(activeAnimal.description)}</p>
          <p><strong>Diet:</strong> {activeAnimal.diet}</p>
          <p>
            <strong>Group:</strong>{' '}
            <Link to={`/${activeAnimal.group}s`}>{activeAnimal.group}</Link>
          </p>
          <button onClick={() => setShowModal(true)}>Read More</button>
        </div>
      )}

      <ul>
        {animals.map(animal => (
          <li key={animal.name}>
            <button onClick={() => toggleAnimal(animal)}>{animal.name}</button>
          </li>
        ))}
      </ul>

      {showModal && (
        <AnimalDetailModal
          animal={activeAnimal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Home;
