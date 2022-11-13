import Button from "react-bootstrap/Button";

const CardDetail = ({card}) => {

  const flipCard = () => {
    //flip flashcard function
  }

  return (
    <div>
        <p>{card.type}</p>
        <p>{card.word}</p>
        <Button>Flip</Button>
        <div>
          {card.description.split("\n").map( (sentence, index) => 
            <div key={index}>{sentence}</div>
          )}
        </div>
    </div>
  )
}
export default CardDetail;