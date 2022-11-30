import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CardAdd from './components/CardAdd';
import CardEdit from './components/CardEdit';
import CardSet from './features/CardSet';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardSet />} />
          <Route path="/new" element={<CardAdd />} />
          <Route path="/edit" element={<CardEdit />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
