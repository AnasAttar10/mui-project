import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbarui from './AppBar/Appbarui'
import Drawerui from './Drawerui/Drawerui'
import { Box } from '@mui/material'
import { Padding } from '@mui/icons-material'

const Root = ({changeTheMode ,modee}) => {
    const drawerWidth = 240
  return (
    <div>
      <Appbarui drawerWidth={drawerWidth}/>
      <Drawerui drawerWidth={drawerWidth} changeTheMode={changeTheMode} modee={modee}/>
      <Box sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` ,
        textAlign:"center" ,padding :"10px" }}>
        <Outlet />
      </Box>

    </div>
  )
}

export default Root