import { useMove, useWheel } from "@use-gesture/react";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "./getWindowDimension";


function UseMouseGesture(id, ref, x, y, value, page = 0, refArr = []) {
  const {width} = useWindowDimensions()
  const [index, setIndex] = useState(0)

  var lastMouseX = 0,
  lastMouseY = 0;
var rotX = x,
  rotY = y || -70;

  const bind = useMove(({ down, movement: [mx, my] }) => {
    console.log('mx', mx)
    if (width >= 600) {
     

      mouseMoved(mx, my)
   
  
     }
  })

  function mouseMoved(mx, my) {
      
    var deltaX = mx - lastMouseX;
    var deltaY = my - lastMouseY;

    lastMouseX = mx;
    lastMouseY = my;

    rotY -= deltaX * -0.1;
    rotX += deltaY * -0.1;

    console.log("rotY", rotX,rotY);
    if(page === 5){
      refArr[0].current.querySelector(`#${id}`)
      .style.transform = "translateZ( -100px) rotateX( " + (-rotX/value) + "deg) rotateY(" + (-rotY/value) + "deg)"

      refArr[1].current.querySelector(`#${id}`)
      .style.transform = "translateZ( -100px) rotateX( " + (-rotX/value) + "deg) rotateY(" + (-rotY/value) + "deg)"


      refArr[2].current.querySelector(`#${id}`)
      .style.transform = "translateZ( -100px) rotateX( " + (-rotX/value) + "deg) rotateY(" + (-rotY/value) + "deg)"

      
    }
    else {
      ref.current.querySelector(`#${id}`)
      .style.transform = "translateZ( -100px) rotateX( " + (-rotX/value) + "deg) rotateY(" + (-rotY/value) + "deg)"
    }
    
  }

  // useEffect(() => {
  //  if (width >= 600) {
  //   var lastMouseX = 0,
  //   lastMouseY = 0;
  // var rotX = x,
  //   rotY = y || -70;

  // // document.addEventListener("mousemove", mouseMoved);
  // // document.addEventListener("mouseup", function () {
  // //   document.removeEventListener("mousemove", mouseMoved);
  // // });
  // // document.addEventListener("click", function () {
  // //   setIndex(index+1)
  // // });

 
  // function mouseMoved(ev) {
  //   var deltaX = ev.pageX - lastMouseX;
  //   var deltaY = ev.pageY - lastMouseY;

  //   lastMouseX = ev.pageX;
  //   lastMouseY = ev.pageY;

  //   rotY -= deltaX * -0.1;
  //   rotX += deltaY * -0.1;

  //   console.log("rotY", rotX,rotY);
  //   ref.current.querySelector(`#${id}`)
  //     .style.transform = "translateZ( -100px) rotateX( " + (-rotX/value) + "deg) rotateY(" + (-rotY/value) + "deg)"
  // }
  //  }
  // }, [index]);
  return {bind}
}

export default UseMouseGesture;