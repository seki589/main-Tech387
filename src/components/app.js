import * as React from "react"

import lottie from "lottie-web"
import animation from "../animations/data.json"

const App = () => {
  let animationContainer = React.createRef();

  return (
    <div className="App">
        <div className="animation-container" ref={animationContainer} />
        <div>Bodymovin Animations in React</div>
    </div>
  );

    React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);
}

export default App