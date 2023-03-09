import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import styles from './CardDetail.module.css';
// import Button from "react-bootstrap/Button";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'

const CardDetail = ({card}) => {

  const navigate = useNavigate();
  const [flip, setFlip] = useState(false);

  const flipCard = e => {
    setFlip(!flip);
  }

  return (
    <div className='border-2 rounded-md m-2 space-x-2 p-5'>
      <div className="grid sm:grid-cols-5 gap-3">
        <div className="col-span-2">
          <p className="text-emerald-600">{card.type}</p>
          <h2>{card.word}</h2>
          <button onClick={flipCard} className={`border rounded ${ flip ? 'bg-amber-700' : 'bg-cyan-600'} text-white px-3 py-1`}>Flip</button>
          <button onClick={() => navigate(`/edit`, {state: {id : card._id}})} className={`border rounded bg-cyan-600 text-white px-3 py-1`}>Edit</button>
        </div>
        <div className="col-span-3">
          {flip && card.description.split("\n").map( (sentence, index) =>
            <div key={index}>{sentence}</div>
          )}
        </div>
      </div>
    </div>
  )
}
export default CardDetail;