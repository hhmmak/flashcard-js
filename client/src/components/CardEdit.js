import { useState, useEffect } from "react";
import axios from "axios";

import CardForm from "./CardForm"

const CardEdit = ({id}) => {

  const[loaded, setLoaded] = useState(false);
  const [card, setCard] = useState({
    "type": "",
    "word": "",
    "description": ""
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/flashcard/${id}`)
    .then( res => {
      setCard(res.data);
      setLoaded(true);
    })
    .catch(err => console.log(err))
  }, [id])

  const editSubmit = () => {
    axios.put(`http://localhost:8000/api/flashcard/${id}`)
      .then( res => {
        console.log(res);
        //TODO what to do after edit
      })
      .catch(err => console.log(err));
  }

  return (
  <>
    { loaded &&
      <div>
        <CardForm card={card} setCard={setCard} submitHandler={editSubmit}/>
      </div>
    }
  </>
  )
}
export default CardEdit