import { useLocation, useNavigate } from 'react-router-dom';
import animalData from '../data/animals';
import { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ setSelectedAnimal, selectedAnimal }) => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const [visibleGroup, setVisibleGroup] = useState('');

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

  const handleAnimalClick = (animal) => {
    console.log("Animal clicked:", animal.name); // ✅ Log animal click
    setSelectedAnimal(prev =>
      prev && prev.name === animal.name ? null : animal
    );

  };

  return (
    <aside className="sidebar">
      <nav>
        {groupNames.map(group => {
          const animalsInGroup = animalData.filter(
            a => a.group === group.slice(0, -1)
          );

          const isGroupActive = currentGroup === group;
          if (isGroupActive) {
            console.log("Active group:", group); // ✅ Log active group
          }

          return (
            <div key={group}>
              <div
                className={`sidebar-group ${isGroupActive ? 'active' : ''}`}
                onClick={() => toggleGroup(group)}
              >
                {groupDisplayName[group]}
              </div>

              {visibleGroup === group && (
                <ul className="animal-list">
                  {animalsInGroup.map(animal => {
                    const pathParts = location.pathname.split('/');
                    const selectedAnimalName = decodeURIComponent(pathParts[2] || '');
                    //const isSelected = selectedAnimalName === animal.name;
                    const isSelected = selectedAnimal && selectedAnimal.name === animal.name;
                    if (isSelected) {
                      console.log("Selected animal:", animal.name); // ✅ Log selected animal
                    }
                    else{
                      console.log("disabled animal:", animal.name); // ✅ Log selected animal
                    }

                    return (
                      <li key={animal.name}>
                        <button
                          onClick={() => handleAnimalClick(animal)}
                          className={`animal-button ${isSelected ? 'active' : ''}`}
                        >
                          {animal.name}
                        </button>
                      </li>
                    );
                  })}
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
