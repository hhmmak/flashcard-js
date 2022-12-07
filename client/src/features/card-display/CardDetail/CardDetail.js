import { useState } from "react";

import styles from './CardDetail.module.css';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const CardDetail = ({card}) => {

  const [flip, setFlip] = useState(false);

  const flipCard = e => {
    setFlip(!flip);
  }

  return (
    <Row className={styles.container}>
        <Col>
          <p>{card.type}</p>
          <p>{card.word}</p>
          <Button onClick={flipCard} variant={flip? "danger" : "primary"}>Flip</Button>
        </Col>
        <Col>
          {flip && card.description.split("\n").map( (sentence, index) => 
            <div key={index}>{sentence}</div>
          )}
        </Col>
    </Row>
  )
}
export default CardDetail;