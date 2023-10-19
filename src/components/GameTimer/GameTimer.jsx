// import React, { useState, useEffect } from 'react';

// function GameTimer() {
//   const [time, setTime] = useState(0);

//   // useEffect to start the timer when the component is mounted
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000); // increment time every second

//     // Cleanup the timer when the component is unmounted
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   // Format the time as desired (e.g., display minutes and seconds)
//   const formattedTime = `${Math.floor(time / 60)}:${(time % 60)
//     .toString()
//     .padStart(2, '0')}`;

//   return (
//     <div>
//       <p>Timer: {formattedTime}</p>
//     </div>
//   );
// }

// export default GameTimer;

// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";

// function GameTimer({ gameId }) {
//   const [time, setTime] = useState(
//     parseInt(Cookies.get(`gameTime_${gameId}`)) || 0
//   );
//   let timer;

//   const startTimer = () => {
//     timer = setInterval(() => {
//       setTime((prevTime) => {
//         const newTime = prevTime + 1;
//         Cookies.set(`gameTime_${gameId}`, newTime, { expires: 365 });
//         return newTime;
//       });
//     }, 1000);
//   };

//   const stopTimer = () => {
//     clearInterval(timer); // Clear the timer when stopTimer is called
//     Cookies.remove(`gameTime_${gameId}`);
//   };

//   useEffect(() => {
//     startTimer(); // Start the timer when the component is mounted

//     return () => {
//       stopTimer(); // Cleanup: stop the timer when the component is unmounted
//     };
//   }, [gameId]);

//   const formattedTime = `${Math.floor(time / 60)}:${(time % 60)
//     .toString()
//     .padStart(2, "0")}`;

//   return (
//     <div>
//       <p>
//         Timer{gameId}: {formattedTime}
//       </p>
//     </div>
//   );
// }

// export default GameTimer;
