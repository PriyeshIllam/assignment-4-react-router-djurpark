import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import animals from '../data/animals';
import '../styles/Home.css';

const Home = ({ selectedAnimal, setSelectedAnimal }) => {
  const location = useLocation();
  const [showFullDetails, setShowFullDetails] = useState(false);

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const animalName = decodeURIComponent(pathParts[2] || '');

    if (animalName) {
      const foundAnimal = animals.find(a => a.name === animalName);
      setSelectedAnimal(foundAnimal || null);
      setShowFullDetails(true);
    } else {
      setSelectedAnimal(null);
      setShowFullDetails(false);
    }
  }, [location, setSelectedAnimal]);

  const getShortDesc = (desc) =>
    desc.length > 200 ? desc.slice(0, 200) + '...' : desc;

  return (
    <div>
      {!selectedAnimal && (
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

      {selectedAnimal && (
        <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
          <img
            src={selectedAnimal.image}
            alt={selectedAnimal.name}
            style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
          />
          <h2>{selectedAnimal.name}</h2>
          <p>
            {showFullDetails
              ? selectedAnimal.description
              : getShortDesc(selectedAnimal.description)}
          </p>
          <p>
            <strong>Food:</strong>{selectedAnimal.food}
            
          </p>
          <p>
            <strong>Group:</strong>{' '}
            <Link to={`/${selectedAnimal.group}s`}>{selectedAnimal.group}</Link>
          </p>

          {showFullDetails && (
            <>
              <p><strong>Diet:</strong> {selectedAnimal.food}</p>
              <p><strong>Lifespan:</strong> {selectedAnimal.lifespan}</p>
              <p><strong>Length:</strong> {selectedAnimal.length}</p>
              <p><strong>Weight:</strong> {selectedAnimal.weight}</p>
              <p><strong>Found in:</strong> {selectedAnimal.found}</p>
            </>
          )}

          <button
            onClick={() => {
              if (showFullDetails) {
                setSelectedAnimal(null);
                setShowFullDetails(false);
              } else {
                setShowFullDetails(true);
              }
            }}
            style={{ marginTop: '1rem' }}
          >
            {showFullDetails ? 'Close' : 'Read More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
