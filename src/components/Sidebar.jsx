import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import animalData from '../data/animals';
import { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [visibleGroup, setVisibleGroup] = useState('');
  const [activeAnimal, setActiveAnimal] = useState('');

  const currentGroup = location.pathname.split('/')[1];
  const groupNames = ['mammals', 'birds', 'reptiles'];

  const groupDisplayName = {
    mammals: 'Mammals',
    birds: 'Birds',
    reptiles: 'Reptiles',
  };

  const toggleGroup = (group) => {
    setVisibleGroup(prev => (prev === group ? '' : group));
  };

  const handleAnimalClick = (animal, group) => {
    const animalPath = `/${group}/${encodeURIComponent(animal)}`;
    if (activeAnimal === animal) {
      setActiveAnimal('');
      navigate('/');
    } else {
      setActiveAnimal(animal);
      navigate(animalPath);
    }
  };

  return (
    <aside className="sidebar">
      <nav>
        {groupNames.map(group => {
          const animalsInGroup = animalData.filter(
            a => a.group === group.slice(0, -1)
          );

          return (
            <div key={group}>
              <NavLink
                to={`/${group}`}
                onClick={() => toggleGroup(group)}
                className={currentGroup === group ? 'active' : ''}
              >
                {groupDisplayName[group]}
              </NavLink>

              {currentGroup === group && (
                <ul className="animal-list">
                  {animalsInGroup.map(animal => (
                    <li key={animal.name}>
                      <button
                        onClick={() => handleAnimalClick(animal.name, group)}
                        className={activeAnimal === animal.name ? 'active-animal' : ''}
                      >
                        {animal.name}
                      </button>
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
