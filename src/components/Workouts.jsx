import React from "react";
import "./Workouts.css";

const workoutPlans = [
  { 
    title: "Chest", 
    description: "Best chest workouts to build strength and size.",
    exercises: [ "Push-Ups", "Incline Dumbbell Press", "Pec Flies", "Cable Crossovers", "Cable High To Low Flies", "Incline Cable Press + Incline Cable Press", "Seated Chest Press", "Single Plate Close Press"],
    backgroundImage: "url('https://images.ctfassets.net/8urtyqugdt2l/4wPk3KafRwgpwIcJzb0VRX/4894054c6182c62c1d850628935a4b0b/desktop-best-chest-exercises.jpg')"
  },
  { 
    title: "Arms", 
    description: "Effective exercises for biceps and triceps.",
    exercises: ["Bicep Curls", "Tricep Dips", "Hammer Curls", "Ez Bar Flat Bench Skull Crusher", "Overhead Tricep Extension", "Spider Curls", "Standing Double Arm Cable Curls", "Cable Cross Over Kickback"],
    backgroundImage: "url('https://media.istockphoto.com/id/602331216/photo/bulking-up-those-muscles.jpg?s=612x612&w=0&k=20&c=7r3NVqkE1SgqjqafY4IsjkyML64Q8BAHf3odlfSx6xo=')"
  },
  { 
    title: "Back", 
    description: "Intense exercises for back.",
    exercises: ["Deadlift", "Front Lat Pull Down", "Close Grip Seated Rowing", "T-Bar Rowing", "Barbell Rowing", "Close Grip Low Pulley Rows", "Dumbell Rowing", "Pull-Ups"],
    backgroundImage: "url('https://media.istockphoto.com/id/1168123536/photo/men-powerlifter-weightlift-bar.jpg?s=612x612&w=0&k=20&c=VEbG3suCZq6EiMDtRNC_FLTH3-fySWxPOzDIzF10NJ4=')"
  },
  { 
    title: "Legs", 
    description: "Build strong legs with these workout routines.",
    exercises: ["Leg Extenssion", "Hack Squats", "Standing Lunges", "Reverse Curls + Stiff Leg Deadlift", "Smith Machine Sumo Squats", "Leg Press", "Addocoter + Abductor", "Calf Raises"],
    backgroundImage: "url('https://media.istockphoto.com/id/622809280/photo/do-not-skip-leg-day.jpg?s=612x612&w=0&k=20&c=tzliB47Wy2cEYpEvgDgBEgsvTpvDTsoZG7aun18swSc=')"
  },
  { 
    title: "Shoulder", 
    description: "Workouts to develop strong, broad shoulders.",
    exercises: ["Barbell Military Press", "Dumbell Lateral Raises", "Front Raises", "Cable Lateral Raises", "Straight Bar Upright Rows", "Rope Face Pull", "Rear Delt Machine Flies", "Plate Shrugs"],
    backgroundImage: "url('https://media.istockphoto.com/id/1465536293/photo/muscular-young-man-lifting-weights-in-a-dark-gym.jpg?s=612x612&w=0&k=20&c=HVoq5elJwByfzAVr8xmFHo63UWFMEtJRKry-MJ9GlyA=')"
  },
  { 
    title: "Abs", 
    description: "Get a six-pack with these core exercises.",
    exercises: ["Hanging Leg Raises", "Decline Crunch", "Alterative Leg Raises + crunch", "Russian Twists", "Bicycle Crunches", "Plank"],
    backgroundImage: "url('https://media.istockphoto.com/id/598666666/photo/incline-sit-up-training.jpg?s=612x612&w=0&k=20&c=BdMwcYEIDps9x_DD73hKUOeE0b6kdV9k80mD1WAVgi0=')"
  },
  { 
    title: "Cardio", 
    description: "Top cardio exercises for endurance and fat loss.",
    exercises: ["Running", "Jump Rope", "Cycling", "Burpees", "High-Intensity Interval Training (HIIT)"],
    backgroundImage: "url('https://media.istockphoto.com/id/1420515189/photo/exercise-workout-and-training-with-a-healthy-man-training-for-sport-fitness-and-wellness.jpg?s=612x612&w=0&k=20&c=IVR0ZPuq6lDA7BKmVfG_1Zya1Z1qNjSzj2q4KNc9M_I=')"
  },
];

const Workouts = () => {
  return (
    <div className="workouts-container">
      <h1>VDA WORKOUT PLANS</h1>
      <br></br>
      <div className="workout-cards">
        {workoutPlans.map((plan, index) => (
          <div
            className="workout-card"
            key={index}
            style={{ backgroundImage: plan.backgroundImage }}
          >
            <div className="card-content">
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
              <ul>
                {plan.exercises.map((exercise, i) => (
                  <li key={i}> {exercise}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
