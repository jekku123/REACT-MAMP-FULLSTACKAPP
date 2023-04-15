import './App.css';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';
import Header from './ui/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<ListUser />} />
          <Route path='user/save' element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
