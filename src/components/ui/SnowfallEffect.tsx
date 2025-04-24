import React, { useEffect } from "react";

const SnowfallEffect: React.FC = () => {
  useEffect(() => {
    // Create the snowflakes effect
    const createSnowflakes = () => {
      const numberOfSnowflakes = 100; // Number of snowflakes
      const snowflakesContainer = document.createElement("div");
      snowflakesContainer.style.position = "fixed";
      snowflakesContainer.style.top = "0";
      snowflakesContainer.style.left = "0";
      snowflakesContainer.style.width = "100%";
      snowflakesContainer.style.height = "100%";
      snowflakesContainer.style.pointerEvents = "none";
      snowflakesContainer.style.zIndex = "9999";
      document.body.appendChild(snowflakesContainer);

      for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.style.position = "absolute";
        snowflake.style.backgroundColor = "#A9D6FF"; // Light blue snowflakes
        snowflake.style.borderRadius = "50%";
        snowflake.style.opacity = (Math.random() * 0.7 + 0.3).toString(); // Random opacity
        snowflake.style.width = `${Math.random() * 10 + 5}px`; // Random size
        snowflake.style.height = snowflake.style.width;

        // Randomize the position and animation delay
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animation = `snowfall ${Math.random() * 10 + 5}s linear infinite`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;

        snowflakesContainer.appendChild(snowflake);
      }
    };

    createSnowflakes();

    // Clean up snowflakes when component unmounts
    return () => {
      const snowflakesContainer = document.querySelector("div");
      if (snowflakesContainer) {
        snowflakesContainer.remove();
      }
    };
  }, []);

  return (
    <>
      {/* Global Snowfall Animation CSS */}
      <style >{`
        @keyframes snowfall {
          0% {
            transform: translateY(-100px);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </>
  );
};

export default SnowfallEffect;
