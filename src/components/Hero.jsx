import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Hero() {
  
  
  return(
    <section className="hero">
      <div className="content">
        <div className="title">
        <h1>LET'S</h1>
        <h1>GET</h1>
        <h1>BUILD...</h1>
        </div>
        <div className="sub-title">
          <p>Your Path to Fitness Success</p>
          <p>Unlock Your True Potential</p>
        </div>   
        
        <div className="buttons">
      <button
       
      ><a href="/workouts">
        View Workout Plans</a>
      </button>
      </div>
    </div>      
    </section>
  )
}
export default Hero;