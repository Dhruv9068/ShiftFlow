
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import VisualiseCanvas from './VisualiseCanvas'; // Import VisualiseCanvas
import './index.css'; // Import global styles

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background GIF */}
        <div className="fixed inset-0 -z-10 bg-bg-gif bg-center bg-cover"></div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/VisualiseCanvas" element={<VisualiseCanvas />} /> {/* VisualiseCanvas route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
