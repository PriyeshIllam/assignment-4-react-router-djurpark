import { NavLink, useLocation } from 'react-router-dom';
import animalData from '../data/animals';

const Sidebar = () => {
  const { pathname } = useLocation();

  let filteredAnimals = animalData;

  if (pathname.includes('mammals')) {
    filteredAnimals = animalData.filter(a => a.group === 'mammal');
  } else if (pathname.includes('birds')) {
    filteredAnimals = animalData.filter(a => a.group === 'bird');
  } else if (pathname.includes('reptiles')) {
    filteredAnimals = animalData.filter(a => a.group === 'reptile');
  }

  return (
    <aside style={{ width: '200px', padding: '1rem', background: '#f4f4f4' }}>
      <nav>
        <NavLink to="/">Home</NavLink><br />
        <NavLink to="/mammals">Mammals</NavLink><br />
        <NavLink to="/birds">Birds</NavLink><br />
        <NavLink to="/reptiles">Reptiles</NavLink><br />
        <hr />
        <ul>
          {filteredAnimals.map(animal => (
            <li key={animal.name}>{animal.name}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
