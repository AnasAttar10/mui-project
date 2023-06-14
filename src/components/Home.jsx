import React from 'react'
import Cardui from './Cardui/Cardui'
import Typography from '@mui/material/Typography'
import { useTheme } from '@emotion/react';
const Home = () => {
  const theme = useTheme()
  return (
    <div>
        <Typography variant="h3" color={theme.palette.activeLink.main}>the List </Typography>
        <Cardui />
    </div>
  )
}

export default Home