import { useNavigate } from 'react-router-dom';
import Welcome from '../components/Welcome';

function WelcomePage() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/dashboard');
  }, 3000);

  return <Welcome />;
}

export default WelcomePage;
