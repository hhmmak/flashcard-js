import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={e => navigate("/card")}>Start</Button>
    </div>
  )
}
export default Main;