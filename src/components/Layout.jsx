import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import SidebarGroup from './SidebarGroup';

const Layout = ({ children }) => {
  const location = useLocation();
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const isGroupPage = location.pathname.includes('/mammals') || location.pathname.includes('/birds') || location.pathname.includes('/reptiles');

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        {!isGroupPage ? (
          <Sidebar setSelectedAnimal={setSelectedAnimal} />
        ) : (
          <SidebarGroup />
        )}

        <main style={{ flex: 1, padding: '1rem' }}>
          {children({ selectedAnimal, setSelectedAnimal })}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
