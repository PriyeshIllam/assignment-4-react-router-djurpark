import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import animalData from '../data/animals';
import { useState, useEffect } from 'react';
import '../styles/Sidebar.css';

const SidebarGroup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeAnimal, setActiveAnimal] = useState('');

  const currentPath = location.pathname;
  const currentGroup = currentPath.split('/')[1]; // '', mammals, birds, reptiles
  const currentAnimal = decodeURIComponent(currentPath.split('/')[2] || '');

  useEffect(() => {
    setActiveAnimal(currentAnimal);
  }, [location]);

  const groupNames = ['mammals', 'birds', 'reptiles'];
  const groupDisplayName = {
    mammals: 'Mammals',
    birds: 'Birds',
    reptiles: 'Reptiles',
  };

  const handleAnimalClick = (animal, group) => {
    const path = `/${group}/${encodeURIComponent(animal)}`;
    if (activeAnimal === animal) {
      setActiveAnimal('');
      navigate(`/${group}`);
    } else {
      setActiveAnimal(animal);
      navigate(path);
    }
  };

  return (
    <aside className="sidebar">
      <nav>
        {groupNames.map(group => {
          const animalsInGroup = animalData.filter(
            a => a.group === group.slice(0, -1)
          );

          // Show all groups on Home page, otherwise just the current group
          if (currentGroup && currentGroup !== group) return null;

          return (
            <div key={group}>
              <NavLink
                to={`/${group}`}
                className="group-link"
              >
                {groupDisplayName[group]}
              </NavLink>

              <ul className="animal-list">
                {animalsInGroup.map(animal => (
                  <li key={animal.name}>
                    <button
                      onClick={() => handleAnimalClick(animal.name, group)}
                      className={`animal-button ${activeAnimal === animal.name ? 'active-animal' : ''}`}
                    >
                      {animal.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default SidebarGroup;
