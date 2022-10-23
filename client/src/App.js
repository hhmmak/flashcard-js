import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import CardAdd from './components/CardAdd';
import CardEdit from './components/CardEdit';
import CardDetail from './components/CardDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/new" element={<CardAdd />} />
        <Route path="/edit" element={<CardEdit />} />
        <Route path="/:id" element={<CardDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
