// components/HoneycombBackground.js
"use client";

import React, { useEffect, useRef } from "react";

const HoneycombBackground = () => {
  const patternRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Initialize the hexagon pattern
  useEffect(() => {
    const patternElement = patternRef.current;
    if (!patternElement) return;

    // Clear any existing hexagons
    patternElement.innerHTML = "";

    // Hexagon dimensions
    const hexWidth = 44; // px
    const hexHeight = 50; // px

    // Calculate the number of hexagons needed
    const patternHeight = window.innerHeight;
    const patternWidth = window.innerWidth;
    const rows = Math.ceil(patternHeight / (hexHeight * 0.75)) + 1;
    const cols = Math.ceil(patternWidth / hexWidth) + 1;

    const svgNS = "http://www.w3.org/2000/svg";
    const hexagonElements = [];

    for (let row = 0; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        // Create an SVG element
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", hexWidth);
        svg.setAttribute("height", hexHeight);
        svg.setAttribute("viewBox", "0 0 44 50");
        svg.style.position = "absolute";
        svg.style.pointerEvents = "none";

        // Calculate position
        const x = col * hexWidth + (row % 2) * (hexWidth / 2);
        const y = row * (hexHeight * 0.75);
        svg.style.left = `${x}px`;
        svg.style.top = `${y}px`;

        // Create the hexagon polygon
        const polygon = document.createElementNS(svgNS, "polygon");
        polygon.setAttribute(
          "points",
          "22,0 44,12.5 44,37.5 22,50 0,37.5 0,12.5"
        );
        polygon.setAttribute("fill", "none");
        polygon.setAttribute("stroke", "#BBBBBB");
        polygon.setAttribute("stroke-opacity", "0.05"); // Faint by default
        polygon.setAttribute("stroke-width", "2");

        svg.appendChild(polygon);
        patternElement.appendChild(svg);

        // Store reference to polygon for later use
        hexagonElements.push({ svg, polygon });
      }
    }

    // Mouse move handler to adjust hexagon outlines
    const handleMouseMove = (mouse) => {
      mousePosition.current = {
        x: mouse.clientX,
        y: mouse.clientY,
      };

      const radius = 100; // Adjust as needed for the effect radius
      const maxOpacity = 1; // Fully visible when close
      const minOpacity = 0.05; // Fainter hexagons when far

      hexagonElements.forEach(({ svg, polygon }) => {
        const rect = svg.getBoundingClientRect();
        const hexCenterX = rect.left + rect.width / 2;
        const hexCenterY = rect.top + rect.height / 2;
        const distance = Math.hypot(
          mousePosition.current.x - hexCenterX,
          mousePosition.current.y - hexCenterY
        );

        let opacity, color;
        if (distance < radius) {
          // Calculate opacity based on distance
          opacity =
            maxOpacity - (distance / radius) * (maxOpacity - minOpacity);
          color = `rgba(0, 174, 255, ${1})`;
        } else {
          opacity = minOpacity; // Default faint opacity
          color = `rgba(204, 204, 204, ${0.7})`; // Default color
        }

        // Set the stroke opacity
        polygon.setAttribute("stroke-opacity", opacity.toString());
        polygon.setAttribute("stroke", color);
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
      {/* Hexagon Pattern */}
      <div
        id="pattern"
        ref={patternRef}
        className="absolute inset-0 z-1 pointer-events-none"
      ></div>
    </div>
  );
};

export default HoneycombBackground;
