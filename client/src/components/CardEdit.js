import { useState, useEffect } from "react";

import CardForm from "./CardForm"

const CardEdit = () => {
  const [card, setCard] = useState({
    "type": "",
    "word": "",
    "description": ""
  });

  const editSubmit = () => {
    //TODO submit fetch
  }

  return (
    <div>
      <CardForm card={card} setCard={setCard} submitHandler={editSubmit}/>
    </div>
  )
}
export default CardEdit