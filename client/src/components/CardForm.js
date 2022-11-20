import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CardForm = ({card, setCard, submitHandler}) => {

  const onChangeHandler = (e) => {
    //TODO setCard
  }

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" name='type' onChange={onChangeHandler} value={card.type}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Word</Form.Label>
          <Form.Control type="text" name='word' onChange={onChangeHandler} value={card.word}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name='description' onChange={onChangeHandler} value={card.description}/>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}
export default CardForm