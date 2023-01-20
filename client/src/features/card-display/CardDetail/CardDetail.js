import { useState } from "react";

import styles from './CardDetail.module.css';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { useNavigate } from "react-router-dom";

const CardDetail = ({card}) => {

  const navigate = useNavigate();
  const [flip, setFlip] = useState(false);

  const flipCard = e => {
    setFlip(!flip);
  }

  return (
    <div className={styles.container}>
        <Row>
          <Col>
            <p>{card.type}</p>
            <h2>{card.word}</h2>
            <Button onClick={flipCard} variant={flip? "danger" : "primary"}>Flip</Button>
            <Button onClick={() => navigate(`/edit`, {state: {id : card._id}})}>Edit</Button>
          </Col>
          <Col sm={7}>
            {flip && card.description.split("\n").map( (sentence, index) =>
              <div key={index}>{sentence}</div>
            )}
          </Col>
        </Row>
    </div>
  )
}
export default CardDetail;