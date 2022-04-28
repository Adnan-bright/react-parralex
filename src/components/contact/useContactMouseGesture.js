import { useMove } from "@use-gesture/react";
import UseWindowDimension from "../../hooks/useWindowDimension";

function UseContactMouseGesture(data, ref) {
    
  const { width } = UseWindowDimension();
  const bind = useMove(({ xy }) => {
    if (width >= 600) {
      mouseMoved(xy[0], xy[1]);
    }
  });

  function mouseMoved(mx, my) {
    data.map((item) => {
      var lastMouseX = 0;
      var lastMouseY = 0;
      var rotX = -item.yValue;
      var rotY = -item.xValue;

      var deltaX = mx - lastMouseX;
      var deltaY = my - lastMouseY;
      lastMouseX = mx;
      lastMouseY = my;

      rotY -= deltaX * -0.1;
      rotX += deltaY * -0.1;

      ref.current.querySelector(`.${item.className}`).style.transform =
        "translateZ( -100px) rotateX( " +
        -rotX / item.speedValue +
        "deg) rotateY(" +
        -rotY / item.speedValue +
        "deg)";
    });
  }

  return { bind };
}

export default UseContactMouseGesture;
