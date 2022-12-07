import { useState } from "react";

import styles from './CardDetail.module.css';
import Button from "react-bootstrap/Button";

const CardDetail = ({card}) => {

  const [flip, setFlip] = useState(false);

  const flipCard = e => {
    setFlip(!flip);
  }

  return (
    <div className={styles.container}>
        <p>{card.type}</p>
        <p>{card.word}</p>
        <Button onClick={flipCard} variant={flip? "danger" : "primary"}>Flip</Button>
        <div>
          {flip && card.description.split("\n").map( (sentence, index) => 
            <div key={index}>{sentence}</div>
          )}
        </div>
    </div>
  )
}
export default CardDetail;