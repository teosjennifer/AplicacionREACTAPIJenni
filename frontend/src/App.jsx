import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import DashboardPage from './pages/DashboardPage';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
