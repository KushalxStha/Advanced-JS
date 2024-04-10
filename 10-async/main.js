// Using setTimeout
const kushal = function(){
    document.querySelector('h1').innerHTML="I am Kushal Shrestha."
}

const changeText = setTimeout(kushal,3000)

document.querySelector('#stop1').addEventListener('click',function(){
    clearTimeout(changeText)
    console.log("Text change is stopped")
})


// Using setInterval
const interFunc=function(){
    console.log("current date: ",Date.now())
}

let inter;

document.querySelector('#start').addEventListener('click',function(){
    inter=setInterval(interFunc,1000)
    console.log("Interval Started")
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(inter)
    console.log("Interval Stopped")
})