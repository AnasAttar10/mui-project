import React from 'react'
import { AppBar , Button,Toolbar ,Avatar, Link} from '@mui/material';

const Appbarui = ({drawerWidth}) => {
  return (
    <AppBar position="static"  sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
    <Toolbar>
      <Link sx={{ flexGrow: 1 , "&:hover":{fontSize:"16.5px" } }}  underline="none" color={'inherit'}>
        Anas Attar 
      </Link>
      <Button color="inherit">Login</Button>
      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
    </Toolbar>
  </AppBar>
  )
}

export default Appbarui