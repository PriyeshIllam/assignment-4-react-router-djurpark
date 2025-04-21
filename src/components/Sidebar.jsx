import { NavLink, Link, useLocation } from 'react-router-dom';
import animalData from '../data/animals';
import { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [visibleGroup, setVisibleGroup] = useState('');
  
  // Extract the current group and animal from the URL
  const currentGroup = location.pathname.split('/')[1]; // Get group (mammals, birds, reptiles)
  const currentAnimalName = new URLSearchParams(location.search).get('animal'); // Get the animal name from the query string

  const groupNames = ['mammals', 'birds', 'reptiles'];

  const groupDisplayName = {
    mammals: 'Mammals',
    birds: 'Birds',
    reptiles: 'Reptiles'
  };

  const toggleGroup = (group) => {
    setVisibleGroup(prev => (prev === group ? '' : group));
  };

  return (
    <aside className="sidebar">
      <nav>
        {groupNames.map(group => {
          const animalsInGroup = animalData.filter(a => a.group === group.slice(0, -1)); // 'mammals' -> 'mammal'

          return (
            <div key={group}>
              <NavLink
                to={`/${group}`}  // Link to the respective page (e.g., /mammals)
                onClick={() => toggleGroup(group)}
                className={currentGroup === group ? 'active' : ''}
              >
                {groupDisplayName[group]}
              </NavLink>

              {currentGroup === group && (
                <ul className="animal-list">
                  {animalsInGroup.map(animal => (
                    <li key={animal.name}>
                      <Link to={`/?animal=${encodeURIComponent(animal.name)}`}>{animal.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
