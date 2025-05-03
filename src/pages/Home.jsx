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
    const pathParts = location.pathname.split('/');
    const animalName = decodeURIComponent(pathParts[2] || '');
    if (animalName) {
      const foundAnimal = animals.find(a => a.name === animalName);
      setActiveAnimal(foundAnimal || null);
    } else {
      setActiveAnimal(null);
    }
  }, [location]);

  const getShortDesc = (desc) =>
    desc.length > 200 ? desc.slice(0, 200) + '...' : desc;

  return (
    <div>
      {/* Welcome Section */}
      {!activeAnimal && (
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
      )}

      {/* Animal Section */}
      <div style={{ padding: '1rem' }}>
        {!activeAnimal ? (
          <p></p>
        ) : (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <img
              src={activeAnimal.image}
              alt={activeAnimal.name}
              style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
            />
            <h2>{activeAnimal.name}</h2>
            <p>{getShortDesc(activeAnimal.description)}</p>
            <p>
              <strong>Group:</strong>{' '}
              <Link to={`/${activeAnimal.group}s`}>
                {activeAnimal.group}
              </Link>
            </p>
            <button onClick={() => setShowModal(true)} style={{ marginTop: '1rem' }}>
              Read More
            </button>
          </div>
        )}
      </div>

      {showModal && activeAnimal && (
        <AnimalDetailModal
          animal={activeAnimal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Home;
