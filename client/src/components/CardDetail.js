import { useEffect, useState } from "react";
import axios from 'axios';

import Button from "react-bootstrap/Button";


const CardDetail = () => {

  const [cards, setCards] = useState([]);

  useEffect( () => {
    axios.get(`http://localhost:5000/api/flashcard`)
      .then(res => setCards(res.data))
      .catch(err => console.log(err));
  
  }, []);

  const flipCard = () => {
    //flip flashcard function
  }


  return (
    <div>
    { cards.map( (card, index) =>
      <div key={index}>
        <p>{card.type}</p>
        <p>{card.word}</p>
        <Button>Flip</Button>
        <p>
          {card.description.split("\n").map( (sentence, index) => 
            <div key={index}>{sentence}</div>
          )}
        </p>
      </div>
    )}
    </div>
  )
}
export default CardDetail;