import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import CardDetail from "./CardDetail/CardDetail";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const CardSet = () => {

  const nav = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect( () => {
    axios.get(`http://localhost:5000/api/flashcard`)
      .then(res => setCards(res.data))
      .catch(err => console.log(err));
  
  }, []);

  return (
    <div>
      <button onClick={() => nav("./new")} className={`border rounded bg-cyan-600 text-white px-5 py-2`}>New Term</button>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 gap-2">
          { cards.map( (card, index) =>
            <div key={index}>
              <CardDetail card={card}/>
            </div>
          )}
          </div>
        </div>
    </div>
  )
}
export default CardSet;