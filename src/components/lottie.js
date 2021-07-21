import React, { useEffect, createRef } from "react";
import '../styles/styles.css'

import lottie from "lottie-web";
import animation from "../animations/data3.json";

const Lottie = () => {
  let animationContainer = createRef();
    useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <div >
        <div className="animation-container" ref={animationContainer} />
    </div>
  );
};

export default Lottie;