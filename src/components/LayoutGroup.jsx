// LayoutGroup.jsx
import Header from './Header';
import Footer from './Footer';
import SidebarGroup from './SidebarGroup';

const LayoutGroup = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <SidebarGroup />
        <main style={{ flex: 1, padding: '1rem' }}>
          {/* Here, children are passed in as JSX */}
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutGroup;
