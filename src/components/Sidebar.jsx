import { NavLink, Link, useLocation } from 'react-router-dom';
import animalData from '../data/animals';
import { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [visibleGroup, setVisibleGroup] = useState('');
  
  // Extract the current group from the URL
  const currentGroup = location.pathname.split('/')[1]; // Get group (mammals, birds, reptiles)
  
  const groupNames = ['mammals', 'birds', 'reptiles'];

  const groupDisplayName = {
    mammals: 'Mammals',
    birds: 'Birds',
    reptiles: 'Reptiles'
  };

  const toggleGroup = (group) => {
    // Toggle visibility of the selected group when clicking the group in the sidebar
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
                className={currentGroup === group ? 'active' : ''}  // Highlight selected group
              >
                {groupDisplayName[group]}
              </NavLink>

              {/* Display the list of animals when the group is active */}
              {currentGroup === group && (
                <ul className="animal-list">
                  {animalsInGroup.map(animal => (
                    <li key={animal.name}>
                      <Link to={`/${group}/${encodeURIComponent(animal.name)}`}>{animal.name}</Link>
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
