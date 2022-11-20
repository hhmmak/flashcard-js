import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CardForm = (props) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" name='type'/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Word</Form.Label>
          <Form.Control type="text" name='word'/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name='description'/>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}
export default CardForm