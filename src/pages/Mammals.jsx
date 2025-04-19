import animals from '../data/animals';
import { useState } from 'react';
import AnimalDetailModal from '../modals/AnimalDetailModal';

const Mammals = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const mammals = animals.filter(a => a.group === 'mammal');

  return (
    <div>
      <h2>Mammals</h2>
      <p>Mammals are warm-blooded animals with fur or hair. Many give birth to live young.</p>
      <ul>
        {mammals.map(animal => (
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

export default Mammals;
