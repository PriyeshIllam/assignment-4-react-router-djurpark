const AnimalDetailModal = ({ animal, onClose }) => {
    if (!animal) return null;
  
    return (
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000, overflowY: 'auto'
      }}>
        <div style={{ background: 'white', margin: '5% auto', padding: '2rem', width: '80%' }}>
          <button onClick={onClose} style={{ float: 'right' }}>Close</button>
          <h2>{animal.name}</h2>
          <img src={animal.image} alt={animal.name} style={{ width: '200px' }} />
          <p>{animal.description}</p>
          <p><strong>Diet:</strong> {animal.diet}</p>
          <p><strong>Group:</strong> {animal.group}</p>
        </div>
      </div>
    );
  };
  
  export default AnimalDetailModal;
  