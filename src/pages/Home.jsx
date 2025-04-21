import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import animals from '../data/animals';
import AnimalDetailModal from '../modals/AnimalDetailModal';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const animalName = queryParams.get('animal');
    if (animalName) {
      const foundAnimal = animals.find(a => a.name === animalName);
      if (foundAnimal) {
        setActiveAnimal(foundAnimal);
      }
    } else {
      setActiveAnimal(null); // Reset if no animal in query
    }
  }, [location]);

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
