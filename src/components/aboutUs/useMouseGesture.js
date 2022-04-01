import React from "react";
import { useMove } from "@use-gesture/react";
import useWindowDimensions from "../hooks/getWindowDimension";
function UseMouseGesture(className, ref) {
    const { width } = useWindowDimensions()
    var lastMouseX = 0,
        lastMouseY = 0;
    var rotX = -90,
        rotY = -20;

    const bind = useMove(({ down, movement: [mx, my] }) => {
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
        console.log("rotY", rotX, rotY);

        ref.current.querySelector(`.${className}`)
                .style.transform = "translateZ( -100px) rotateX( " + (-rotX / 15) + "deg) rotateY(" + (-rotY / 10) + "deg)"


    }

    return { bind }
}

export default UseMouseGesture;