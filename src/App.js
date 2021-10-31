import { useState } from 'react';
import './App.css';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PlaceIcon from '@material-ui/icons/Place';
import TimerIcon from '@material-ui/icons/Timer';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

import { LinearProgress } from '@material-ui/core';


const App = () => {
  let max = 3
  let min = 2
  const [steps, setSteps] = useState(Math.floor((Math.random() * (+max - +min) + +min) * 1000))

  return (
    <div className="App__main">
      <div class="App__counter ">
        <div className="steps">
          <h1>{steps}<DirectionsWalkIcon/></h1>
          <h2>/{max * 1000} Steps</h2>
        </div>
        <LinearProgress className="progression" color="secondary" variant="determinate" value={(steps/(max * 1000))*100} />
        <div className="App__icons">
          <div>
            <PlaceIcon style={{fill: "#6fffd4"}}/>
            <h2>{Math.round(((steps*0.000762) + Number.EPSILON) * 100) / 100}km</h2>  
          </div>
          <div>
            <WhatshotIcon style={{fill: "red"}}/>
            <h2>{Math.round(((steps*0.0414) + Number.EPSILON) * 100) / 100}cal</h2>  
          </div>
          <div>
            <TimerIcon style={{fill: "#ff8a46"}}/>
            <h2>{Math.round(((steps*0.009654) + Number.EPSILON) * 100) / 100}min</h2>  
          </div>
        </div>
        <div class='ripple-background'>
          <div class='circle xxlarge shade1'>
            <h1>Thanks for Visiting </h1>
          </div>
          <div class='circle xlarge shade2'></div>
          <div class='circle large shade3'></div>
          <div class='circle mediun shade4'></div>
          <div class='circle small shade5'></div>
        </div>
      </div>
    </div>

  );
}

export default App;
