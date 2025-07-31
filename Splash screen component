import React, { useEffect } from "react";
import "../styles/splash.css";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4500); // 4.5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <div className="glitch-text">⚡ GRAY_HAT FLIX ⚡</div>
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
    </div>
  );
}
