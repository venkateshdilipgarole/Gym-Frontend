import React from "react";
import { Link } from "react-router-dom";


const WorkoutSessions = () => {
  return(
    <section className="workout_session">
      <div className="wrapper">
        <h1><i>TOP WORKOUT SESSIONS</i></h1>
        <p><i>
        Top sessions include high-intensity interval training for quick calorie burns, strength training to build and tone muscles.
       </i> </p>
        <img src="/img5.jpg" alt="workout"/>
      </div>
      <div className="wrapper">
        <h1><i>FEATURED BOOTCAMPS</i></h1>
        <p><i>
           Fighting for your dreams isn't always easy but it's so worth it.
           </i>
        </p>
       <div className="bootcamps">
        <div>
          <h4><i>You just can't beat the person who never gives up</i></h4>
          <p>
          Strength and Conditioning Bootcamps focus on building muscle and improving functional strength through weightlifting and resistance exercises.
          </p>
        </div>
        <div>
          <h4><i>I never dreamed about success. I worked for it</i></h4>
          <p><i>
          For those looking to lose weight, Fat Burn Bootcamps incorporate high-energy exercises designed to shed pounds quickly.
          </i>
          </p>
        </div>
        <div>
          <h4><i>A little progress each day adds up to big results</i></h4>
          <p><i>
          Outdoor Bootcamps offer a refreshing change of scenery, combining bodyweight exercises with running and agility drills.
          </i>
          </p>
        </div>
        <div>
          <h4><i>The hardest part is over. You showed up</i></h4>
          <p><i>
          Meanwhile, Boxing Bootcamps improve coordination, stamina, and self-defense skills. Finally, Yoga and Flexibility Bootcamps help improve balance, flexibility.
          </i>
          </p>
        </div>
       </div>
      </div>
    </section>
  );
};
export default WorkoutSessions;