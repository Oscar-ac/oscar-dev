import React, { useState, useEffect } from 'react';
import classes from '@/styles/background.module.css';

import HexRow from './hexRow';

const Background = () => {

    const [windowSize, setWindowSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    // useEffect(() => {
        // let x = setTimeout(() => {
            console.log(windowSize);
            const hexX:number = windowSize.width / 104;
            const hexY:number = windowSize.height / 60;

            console.log(hexX, hexY);
        // }, 500);

        // return () => {
            // clearTimeout(x);
        // }
    // }, [windowSize]);

    // window.addEventListener('resize', () => {
    //     setWindowSize({
    //         height: window.innerHeight,
    //         width: window.innerWidth
    //     });
    // console.log("resize");
    // });

    return(
        <div className={classes["hex-container"]}>
            {Array(Math.ceil(hexY)).fill(<HexRow hexX={hexX}></HexRow>)};
        </div>
    );
}

export default Background;