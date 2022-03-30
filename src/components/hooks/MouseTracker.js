import { useEffect, useRef, useState } from "react";

function MouseTracker(id, ref, x, y, value) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    var lastMouseX = 0,
      lastMouseY = 0;
    var rotX = x,
      rotY = y || -70;

    document.addEventListener("mousemove", mouseMoved);
    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", mouseMoved);
    });
    document.addEventListener("click", function () {
      setIndex(index+1)
    });
    function mouseMoved(ev) {
      var deltaX = ev.pageX - lastMouseX;
      var deltaY = ev.pageY - lastMouseY;

      lastMouseX = ev.pageX;
      lastMouseY = ev.pageY;

      rotY -= deltaX * -0.1;
      rotX += deltaY * -0.1;

      console.log("rotY", rotX,rotY);
      ref.current.querySelector(`#${id}`)
        .style.transform = "translateZ( -100px) rotateX( " + (-rotX/value) + "deg) rotateY(" + (-rotY/value) + "deg)"
    }
  }, [index]);
  const response=true
  return {response}
}

export default MouseTracker;