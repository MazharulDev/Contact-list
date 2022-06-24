import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Login from './shared/Login';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={

          <Home />

        }></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
