import React from 'react'
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser'
import Main from './components/Main';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
       <NavBar/>
       <Routes>

       <Route path='/all' element={<AllUser/>} />
       <Route path='/add' element={<AddUser/>} />
       <Route path="/edit/:id" element={<EditUser />} />
       <Route path='/' element={<Main/>} />

       </Routes>
    </BrowserRouter>
  );
}

export default App;



