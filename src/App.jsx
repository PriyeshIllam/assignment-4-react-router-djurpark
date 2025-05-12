import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mammals from './pages/Mammals';
import Birds from './pages/Birds';
import Reptiles from './pages/Reptiles';
import Layout from './components/Layout';
import LayoutGroup from './components/LayoutGroup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>{({ selectedAnimal, setSelectedAnimal }) => (
          <Home selectedAnimal={selectedAnimal} setSelectedAnimal={setSelectedAnimal} />
        )}</Layout>} />
        <Route path="/mammals/:animalName" element={<LayoutGroup><Mammals /></LayoutGroup>} />
        <Route path="/reptiles/:animalName" element={<LayoutGroup><Reptiles /></LayoutGroup>} />
        <Route path="/birds/:animalName" element={<LayoutGroup><Birds /></LayoutGroup>} />
        <Route path="/mammals" element={<LayoutGroup><Mammals /></LayoutGroup>} />
        <Route path="/birds" element={<LayoutGroup><Birds /></LayoutGroup>} />
        <Route path="/reptiles" element={<LayoutGroup><Reptiles /></LayoutGroup>} />
      </Routes>
    </Router>
  );
}

export default App;
