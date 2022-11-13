import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './views/Main';
// import CardAdd from './components/CardAdd';
// import CardEdit from './components/CardEdit';
import CardSet from './views/CardSet';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          {/* <Route path="/new" element={<CardAdd />} />
          <Route path="/edit" element={<CardEdit />} /> */}
          <Route path="/card" element={<CardSet />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
