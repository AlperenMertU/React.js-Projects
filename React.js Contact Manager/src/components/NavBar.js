import React from 'react'
import { AppBar, Toolbar, Typography, styled} from '@mui/material'
import { NavLink } from 'react-router-dom'
 const Header = styled(AppBar)`
 background:gray;
 `
 const Tabs = styled(NavLink)`
 font-size:20px;
 margin-right:20px;
 color:white;
 text-decoration:none
 `

function NavBar() {
  return (
    <div>
      <Header position='static'>
       <Toolbar>    
       <Tabs to="/">Main Menu</Tabs>    
       </Toolbar>
      </Header>
    </div>
  )
}

export default NavBar
