import { useEffect, useState } from "react";
import axios from 'axios';

import CardDetail from "./card-form/CardDetail";

const CardSet = () => {

  const [cards, setCards] = useState([]);

  useEffect( () => {
    axios.get(`http://localhost:5000/api/flashcard`)
      .then(res => setCards(res.data))
      .catch(err => console.log(err));
  
  }, []);

  return (
    <div>
    { cards.map( (card, index) =>
      <CardDetail key={index} card={card}/>
    )}
    </div>
  )
}
export default CardSet;