import React from "react";

function useHover (){

    const [hovered, setHovered] = React.useState(false);
    const ref = React.useRef(null);

    function enter(){
        setHovered(true);
    }

    function leave(){
        setHovered(false);
    }

    React.useEffect(() => {
    // if (ref.current !== null){  //only for testing
        ref.current.addEventListener("mouseenter", enter);  //also tested outside useEffect. Was buggy and was
        ref.current.addEventListener("mouseleave", leave);  //not allowing the images to be rendered correctly
        //this is a very specific case where useEffect shines. If we assign EvntLsnr to a null element, it will
        //throw an error. But since, useEffect runs after the render part has been executed, it is able to assign the
        //EvntLsnr easily
    // }
    }, [])

    return([hovered, ref]);
}

export default useHover;