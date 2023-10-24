// import React, { useEffect } from 'react';
// import "./Celebration.css";

// const Celebration = () => {
//     useEffect(() => {
//         const fireworks = 30;
//         const container = document.body;

//         for (let i = 0; i < fireworks; i++) {
//             createFirework();
//         }

//         function createFirework() {
//             const firework = document.createElement("div");
//             firework.className = "firework";
//             container.appendChild(firework);

//             const x = Math.random() * window.innerWidth;
//             const y = Math.random() * window.innerHeight;
//             firework.style.left = `${x}px`;
//             firework.style.top = `${y}px`;
//         }
//     }, []);

//     return (
//         <div className="celebration-container">
//             {/* You can add additional content here */}
//         </div>
//     );
// };

// export default Celebration;

// Celebration.js

import React, { useEffect } from "react";
import "./Celebration.css";
const Celebration = () => {
  useEffect(() => {
    const fireworks = 30;
    const container = document.body;

    for (let i = 0; i < fireworks; i++) {
      createFirework();
    }

    function createFirework() {
      const firework = document.createElement("div");
      firework.className = "star"; // Use the "star" class for star-shaped fireworks
      container.appendChild(firework);

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      firework.style.left = `${x}px`;
      firework.style.top = `${y}px`;
    }
  }, []);

  return <div className="celebration-container"></div>;
};

export default Celebration;
