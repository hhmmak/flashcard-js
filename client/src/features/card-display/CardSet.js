import { useEffect, useState } from "react";
import axios from 'axios';

import CardDetail from "./CardDetail/CardDetail";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

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
      <Button onClick={() => nav("./new")}>New Term</Button>
    { cards.map( (card, index) =>
      <CardDetail key={index} card={card}/>
    )}
    </div>
  )
}
export default CardSet;