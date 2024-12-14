import React, { useEffect, useState } from 'react'


const throttleFn = (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

const Throttle = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = throttleFn(() => {
        setWindowWidth(window.innerWidth);
        console.log("Window resized to:", window.innerWidth);
    }, 3000);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return (
        <>
            <div>
                <h5>Throttling for performance optimization</h5>
            </div>

            <div>
                <h1>Custom Throttling</h1>
                <p>Window width: {windowWidth}px</p>
            </div>
        </>
    )
}

export default Throttle
