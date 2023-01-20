import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import CardForm from "./CardForm";

const CardEdit = () => {

  const navigate = useNavigate();
  const {state} = useLocation();

  const[loaded, setLoaded] = useState(false);
  const [card, setCard] = useState({
    "type": "",
    "word": "",
    "description": ""
  });

  useEffect(() => {
    if (!state) {
      return navigate('/');
    }
    axios.get(`http://localhost:5000/api/flashcard/${state.id}`)
    .then( res => {
      setCard(res.data);
      setLoaded(true);
    })
    .catch(err => console.log(err))
  }, [state])

  const editSubmit = () => {
    axios.put(`http://localhost:8000/api/flashcard/${state.id}`)
      .then( res => {
        console.log(res);
        navigate('/');
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