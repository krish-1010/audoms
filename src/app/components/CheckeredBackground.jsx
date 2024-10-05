// // components/CheckeredBackground.js
// "use client";

// import React, { useEffect, useRef } from "react";

// const CheckeredBackground = () => {
//   const patternRef = useRef(null);
//   const mousePosition = useRef({ x: 0, y: 0 });

//   // Initialize the square pattern
//   useEffect(() => {
//     const patternElement = patternRef.current;
//     if (!patternElement) return;

//     // Clear any existing squares
//     patternElement.innerHTML = "";

//     // Square dimensions
//     const squareSize = 50; // px

//     // Calculate the number of squares needed
//     const patternWidth = window.innerWidth;
//     const patternHeight = window.innerHeight;
//     const cols = Math.ceil(patternWidth / squareSize) + 1;
//     const rows = Math.ceil(patternHeight / squareSize) + 1;

//     const squareElements = [];

//     for (let row = 0; row < rows; row++) {
//       for (let col = 0; col < cols; col++) {
//         // Create a square div
//         const square = document.createElement("div");
//         square.style.position = "absolute";
//         square.style.width = `${squareSize}px`;
//         square.style.height = `${squareSize}px`;
//         square.style.left = `${col * squareSize}px`;
//         square.style.top = `${row * squareSize}px`;
//         square.style.boxSizing = "border-box";
//         square.style.border = "1px solid rgba(204, 204, 204, 0.05)"; // Faint border by default
//         square.style.pointerEvents = "none";

//         patternElement.appendChild(square);

//         // Store reference for later use
//         squareElements.push(square);
//       }
//     }

//     // Mouse move handler to adjust square borders
//     const handleMouseMove = (mouse) => {
//       mousePosition.current = {
//         x: mouse.clientX,
//         y: mouse.clientY,
//       };

//       const radius = 150; // Adjust as needed for the effect radius
//       const maxOpacity = 1; // Fully visible when close
//       const minOpacity = 0.05; // Fainter squares when far

//       squareElements.forEach((square) => {
//         const rect = square.getBoundingClientRect();
//         const squareCenterX = rect.left + rect.width / 2;
//         const squareCenterY = rect.top + rect.height / 2;
//         const distance = Math.hypot(
//           mousePosition.current.x - squareCenterX,
//           mousePosition.current.y - squareCenterY
//         );

//         let opacity, color;
//         if (distance < radius) {
//           // Calculate opacity based on distance
//           opacity =
//             maxOpacity - (distance / radius) * (maxOpacity - minOpacity);
//           // Blue color near the pointer
//           color = `rgba(0, 174, 255, ${0.5})`;
//         } else {
//           opacity = minOpacity;
//           // Default gray color
//           color = `rgba(204, 204, 204, ${0.05})`;
//         }

//         // Set the border color
//         square.style.border = `1px solid ${color}`;
//       });
//     };

//     // Throttle the mousemove handler for performance
//     let throttleTimeout = null;
//     const throttledMouseMove = (event) => {
//       if (!throttleTimeout) {
//         throttleTimeout = setTimeout(() => {
//           throttleTimeout = null;
//           handleMouseMove(event);
//         }, 50); // Adjust the delay as needed
//       }
//     };

//     // Add event listener for mousemove
//     document.addEventListener("mousemove", throttledMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", throttledMouseMove);
//     };
//   }, []);

//   return (
//     <div className="">
//       {/* Square Pattern */}
//       <div
//         ref={patternRef}
//         className="absolute inset-0 z-1 pointer-events-none"
//       ></div>
//     </div>
//   );
// };

// export default CheckeredBackground;

// components/CheckeredBackground.js
"use client";

import React, { useEffect, useRef } from "react";

const CheckeredBackground = () => {
  const patternRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Initialize the square pattern
  useEffect(() => {
    const patternElement = patternRef.current;
    if (!patternElement) return;

    // Clear any existing squares
    patternElement.innerHTML = "";

    // Square dimensions
    const squareSize = 50; // px

    // Calculate the number of squares needed
    const patternWidth = window.innerWidth;
    const patternHeight = window.innerHeight;
    const cols = Math.ceil(patternWidth / squareSize) + 1;
    const rows = Math.ceil(patternHeight / squareSize) + 1;

    const squareElements = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Create a square div
        const square = document.createElement("div");
        square.style.position = "absolute";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.left = `${col * squareSize}px`;
        square.style.top = `${row * squareSize}px`;
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid transparent"; // Start with no border
        square.style.pointerEvents = "none";

        patternElement.appendChild(square);

        // Store reference and position for later use
        squareElements.push({
          element: square,
          centerX: col * squareSize + squareSize / 2,
          centerY: row * squareSize + squareSize / 2,
        });
      }
    }

    // Mouse move handler to adjust square borders
    const handleMouseMove = (mouse) => {
      mousePosition.current = {
        x: mouse.clientX,
        y: mouse.clientY,
      };

      const radius = 100; // Adjust as needed for the effect radius
      const maxOpacity = 1; // Fully visible when close
      const minOpacity = 0; // No border when far

      squareElements.forEach(({ element: square, centerX, centerY }) => {
        const distance = Math.hypot(
          mousePosition.current.x - centerX,
          mousePosition.current.y - centerY
        );

        if (distance < radius) {
          // Calculate opacity based on distance
          const opacity =
            maxOpacity - (distance / radius) * (maxOpacity - minOpacity);
          // Blue color near the pointer
          const color = `rgba(0, 174, 255, ${opacity})`;
          // Set the border color
          square.style.border = `1px solid ${color}`;
        } else {
          // Hide the border for squares outside the radius
          // const opacity = 0.5;
          // Default gray color
          const color = `rgba(204, 204, 204, ${0.05})`;
          square.style.border = `1px solid ${color}`;
        }
      });
    };

    // Throttle the mousemove handler for performance
    let throttleTimeout = null;
    const throttledMouseMove = (event) => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
          handleMouseMove(event);
        }, 50); // Adjust the delay as needed
      }
    };

    // Add event listener for mousemove
    document.addEventListener("mousemove", throttledMouseMove);

    return () => {
      document.removeEventListener("mousemove", throttledMouseMove);
    };
  }, []);

  return (
    <div className="">
      {/* Square Pattern */}
      <div
        ref={patternRef}
        className="absolute inset-0 z-1 pointer-events-none"
      ></div>
    </div>
  );
};

export default CheckeredBackground;
