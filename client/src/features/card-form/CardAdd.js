import { useState } from "react";
import axios from "axios";

import CardForm from "./CardForm"
import { useNavigate } from "react-router-dom";

const CardAdd = () => {

  const navigate = useNavigate();

  const [card, setCard] = useState({
    "type": "",
    "word": "",
    "description": ""
  });

  const editSubmit = (newCard) => {
    axios.post(`http://localhost:5000/api/flashcard`, newCard)
      .then( res => {
        console.log(res);
        navigate('/card');
      })
      .catch(err => console.log(err));
  }

  return (
    <CardForm card={card} setCard={setCard} submitHandler={editSubmit}/>
  )
}
export default CardAdd;