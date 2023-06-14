import * as React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Root from './components/Root';
import  Home  from './components/Home';
import  Create  from './components/Create';
import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { deepPurple, pink, teal } from '@mui/material/colors';


// import './App.css';

const App =()=> {

  const [modee , setModee]=useState("light")

  const darkTheme = createTheme({
    palette: {
      // mode:modee
      mode : modee , 
      ...(modee==="light"
      ?
      {
        anas:{
          main:"teal"
        },
        activeLink :{
          main : pink[500]
        }
      }
      :{
        anas:{
          main:"red"
        },
        activeLink :{
          main : teal[500]
        }
      } 
    )
    },
  });
  const changeTheMode =()=>{
    modee==="dark" ? setModee("light"):setModee("dark")
  }
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Root changeTheMode={changeTheMode} modee={modee}/>}>
            <Route index element={<Home />}/>
            <Route path='create' element={<Create />}/>
        </Route>
      </Routes>
      </ThemeProvider>

    </div>
  );
}

export default App;
