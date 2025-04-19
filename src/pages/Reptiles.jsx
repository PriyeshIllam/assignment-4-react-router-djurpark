import animals from '../data/animals';
import { useState } from 'react';
import AnimalDetailModal from '../modals/AnimalDetailModal';

const Reptiles = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const reptiles = animals.filter(a => a.group === 'reptile');

  return (
    <div>
      <h2>Reptiles</h2>
      <p>Reptiles are warm-blooded animals with fur or hair. Many give birth to live young.</p>
      <ul>
        {reptiles.map(animal => (
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

export default Reptiles;
