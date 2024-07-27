import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       
        <AppBar>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Store
          </Typography>
          <Link to='/add'>
          <Button variant="text">ADD</Button>
          </Link>
          <Link to='/'>
          <Button variant="text">HOME</Button>
          </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
