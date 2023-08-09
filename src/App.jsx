import React from 'react'
import Navigation from './Components/Navigation'
import Body from './Components/Body'
import {BrowserRouter as Router, Route, Navigate} from 'react-router-dom';
import ScrollToTopButton from './Components/Scroll'




function App() {
  

  return (
    <div>
      <ScrollToTopButton/>
      <Navigation/>
      <Body/>
    </div>
  );
}

export default App
