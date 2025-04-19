// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mammals from './pages/Mammals';
import Birds from './pages/Birds';
import Reptiles from './pages/Reptiles';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/mammals" element={<Layout><Mammals /></Layout>} />
        <Route path="/birds" element={<Layout><Birds /></Layout>} />
        <Route path="/reptiles" element={<Layout><Reptiles /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
