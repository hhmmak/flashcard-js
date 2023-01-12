import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CardForm from "./CardForm";

const CardEdit = ({id}) => {

  const navigate = useNavigate();

  const[loaded, setLoaded] = useState(false);
  const [card, setCard] = useState({
    "type": "",
    "word": "",
    "description": ""
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/flashcard/${id}`)
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
        navigate('/card');
      })
      .catch(err => console.log(err));
  }

  return (
  <>
    { loaded &&
      <CardForm card={card} setCard={setCard} submitHandler={editSubmit}/>
    }
  </>
  )

}
export default CardEdit