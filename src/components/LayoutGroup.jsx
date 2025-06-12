// LayoutGroup.jsx
import Header from './Header';
import Footer from './Footer';
import SidebarGroup from './SidebarGroup';
import '../styles/Layout.css'; // Reuse same layout styles

const LayoutGroup = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="layout-container">
        <SidebarGroup />
        <main className='animal-group-container'>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutGroup;
