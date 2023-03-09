import { useNavigate } from "react-router-dom";

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const CardForm = ({card, setCard, submitHandler}) => {

  const nav = useNavigate();

  const onChangeHandler = (e) => {
    setCard({...card, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(card);
  }

  return (
    <div>
      <button onClick={() => nav("/")} className={`border rounded bg-cyan-600 text-white px-5 py-2`}>Back to Homepage</button>
      <form onSubmit={onSubmit}>
        <div className="my-3">
          <label>Type</label>
          <input type="text" name='type' onChange={onChangeHandler} value={card.type} className='border mx-3 px-3 py-1' />
        </div>
        <div className="my-3">
          <label>Word</label>
          <input type="text" name='word' onChange={onChangeHandler} value={card.word} className='border mx-3 px-3 py-1' />
        </div>
        <div className="my-3">
          <label className="block">Description</label>
          <textarea rows='7' cols='100' name='description' onChange={onChangeHandler} value={card.description} className='border rounded-lg my-3 px-3 py-1' />
        </div>
        <button type="submit" className={`border rounded bg-cyan-600 text-white px-3 py-1`}>Submit</button>
      </form>
    </div>
  )
}
export default CardForm