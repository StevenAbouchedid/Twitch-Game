const { mouse, left, right, up, down, straightTo, centerOf, Region} = require("@nut-tree/nut-js");
const btn = document.getElementById('robotmove');
const inputText = document.getElementById('mouseDistanceInput').value //mouse distance value


robotMove = () => {

    console.log("input text: "+inputText)
    console.log("hello");
    mouse.move(right(parseInt(inputText)));

    // "use strict";

    
    // const square = async () => {
    //   await mouse.move(right(500));
    //   await mouse.move(down(500));
    //   await mouse.move(left(500));
    //   await mouse.move(up(500));
    // };
    
    // (async () => {
    //     await square();
    //     await mouse.move(
    //         straightTo(
    //             centerOf(
    //                 new Region(100, 100, 200, 300)
    //             )
    //         )
    //     );
    // })();
}


btn.onclick = robotMove;



