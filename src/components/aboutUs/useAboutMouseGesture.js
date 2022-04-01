import React from "react";
import { useMove } from "@use-gesture/react";
import UseWindowDimension from "../hooks/useWindowDimension";
function UseAboutMouseGesture(className, ref) {
    const { width } = UseWindowDimension()
    var lastMouseX = 0,
        lastMouseY = 0;
    var rotX = 90,
        rotY = -20;

    const bind = useMove(({xy}) => {
        console.log('initial', xy)
        if (width >= 600) {
            mouseMoved(xy[0], xy[1])
        }
    })

    function mouseMoved(mx, my) {

        var deltaX = mx - lastMouseX;
        var deltaY = my - lastMouseY;
        lastMouseX = mx;
        lastMouseY = my;

        rotY -= deltaY * -0.1;
        rotX += deltaX * -0.1;

        ref.current.querySelector(`.${className}`)
                .style.transform = "translateZ( -100px) rotateX( " + (rotY / 5) + "deg) rotateY(" + (rotX / 10) + "deg)"
             
            }

    return { bind }
}

export default UseAboutMouseGesture;