import React,{useState} from 'react'
import { AppBar, Toolbar, Typography, styled, Button} from '@mui/material'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AllUsers from './AllUser';

function Main() {
  const [show, setShow] = useState(false)
  console.log(show);

  return (        

    <div>
       <Toolbar> 
       <Link to="/add"><Button onClick={()=>setShow(true)} variant="outlined">Kullanıcı Ekle</Button></Link>
       </Toolbar>

       {
        show ? <h3>Hiç kayit bulunmadi</h3> : <AllUsers/> 
       }

    </div> 
  )  

}

export default Main



