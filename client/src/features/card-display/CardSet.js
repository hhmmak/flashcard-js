import { useEffect, useState } from "react";
import axios from 'axios';

import CardDetail from "./CardDetail/CardDetail";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardSet = () => {

  const nav = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect( () => {
    axios.get(`http://localhost:5000/api/flashcard`)
      .then(res => setCards(res.data))
      .catch(err => console.log(err));
  
  }, []);

  return (
    <div>
      <Button size={"lg"} onClick={() => nav("./new")}>New Term</Button>
        <Container>
          <Row>
          { cards.map( (card, index) =>
            <Col lg={6}>
              <CardDetail key={index} card={card}/>
            </Col>
          )}
          </Row>
        </Container>
    </div>
  )
}
export default CardSet;