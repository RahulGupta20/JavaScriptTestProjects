// generate a random color
/*
const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = '#' 
    for(let i = 0; i < 6;  i++) {
        // console.log(i)
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
// console.log(randomColor())
// const colorStore = randomColor()

// document.querySelector('body').style.backgroundColor = colorStore
let intervalId
const stratChangingColor = function() {
    if(!intervalId) {
        intervalId = setInterval(changeBodyColor, 1000)
    }

    function changeBodyColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', stratChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

 */




// generate a random color
/*
const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = "#";

    for(let i = 0; i < 6; i++) {
        //steps how to
        // console.log(i + " wa beri random me niche k (x) aayeel abb hex ke position par ka ba?")
        // const ram = Math.floor(Math.random() * 16);
        // console.log(`${i} wa beri me mathRandom vaila par ${ram}  aayeel abb upar ke hex ke position pe kon letter ba?`)
        // console.log(ram)
        // color += hex[ram]


        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

console.log(randomColor())


const body = document.querySelector('body');

setInterval(function(){
    body.style.backgroundColor = randomColor()
}, 1000)

*/

const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        // console.log(i);
        // const rannum = Math.floor(Math.random() * 16);
        // console.log(i,  rannum)
        // color += hex[rannum]
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

console.log(randomColor())

let intervalId;

const startChangingColor = function() {
    const changeBgColor = function() {
        document.body.style.backgroundColor = randomColor();
    }
    // intervalId = setInterval(changeBgColor, 1000);
    if(!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
}

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor)
