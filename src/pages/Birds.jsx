import animals from '../data/animals';
import { useState } from 'react';
import AnimalDetailModal from '../modals/AnimalDetailModal';

const Birds = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const birds = animals.filter(a => a.group === 'bird');

  return (
    <div>
      <h2>Birds</h2>
      <p>Birds are warm-blooded animals with fur or hair. Many give birth to live young.</p>
      <ul>
        {birds.map(animal => (
          <li key={animal.name}>
            <button onClick={() => setSelectedAnimal(animal)}>{animal.name}</button>
          </li>
        ))}
      </ul>
      {selectedAnimal && (
        <AnimalDetailModal animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
      )}
    </div>
  );
};

export default Birds;
