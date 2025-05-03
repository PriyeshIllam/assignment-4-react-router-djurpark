import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import animals from '../data/animals';
import AnimalDetailModal from '../modals/AnimalDetailModal';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

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
      setActiveAnimal(null);
    }
  }, [location]);

  const getShortDesc = (desc) =>
    desc.length > 200 ? desc.slice(0, 200) + '...' : desc;

  return (
    <div>
      {/* Welcome Video Section */}
      <div className="welcome-container">
        <div className="overlay">
          <h1>Welcome to Djurpark</h1>
          <div>Explore Australia's Unique Wildlife</div>
        </div>
        <div className="video-container">
          <video src="/videos/chamelion.mp4" autoPlay loop muted />
        </div>
        <div className="video-container">
          <video src="/videos/kangarooo.mp4" autoPlay loop muted />
        </div>
        <div className="video-container">
          <video src="/videos/parrot.mp4" autoPlay loop muted />
        </div>
      </div>

      {/* Animal Section */}
      <div style={{ padding: '1rem' }}>
        {!activeAnimal ? (
          <p>Welcome to the Djurpark Australian Animals Exhibition!</p>
        ) : (
          <div>
            <img
              src={activeAnimal.image}
              alt={activeAnimal.name}
              style={{ width: '150px' }}
            />
            <h2>{activeAnimal.name}</h2>
            <p>{getShortDesc(activeAnimal.description)}</p>
            <p>
              <strong>Diet:</strong> {activeAnimal.diet}
            </p>
            <p>
              <strong>Group:</strong>{' '}
              <Link to={`/${activeAnimal.group}s`}>
                {activeAnimal.group}
              </Link>
            </p>
            <button onClick={() => setShowModal(true)}>Read More</button>
          </div>
        )}
      </div>

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
