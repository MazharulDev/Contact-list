import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactList from './components/ContactList';
import NewContact from './components/NewContact';
import Test from './components/Test';
import Home from './Home/Home';
import Login from './shared/Login';
import RequireAuth from './shared/RequireAuth';



function App() {
  return (
    <div>
      <Routes>


        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }>
          <Route index element={<ContactList />}></Route>
          <Route path='new' element={<NewContact />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div >
  );
}

export default App;
