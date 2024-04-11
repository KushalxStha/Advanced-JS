const BGC = function bgchanger() {
    const range = "0123456789ABCDEF";
    let color = "#";

    for(let i=0; i<6;i++){
        let index=Math.floor(Math.random() * 16)
        color += range.charAt(index);
    }
    document.querySelector('span').innerHTML=color;
    document.querySelector('body').style.backgroundColor=color;
}

let changeBGC;

document.querySelector('#startChanging').addEventListener('click',function(){
    // [ Defensive Programming Practice ]
    // It ensures that the interval is only set if it's not already set.
    // Prevents overlapping interval
    if(!changeBGC){
        changeBGC=setInterval(BGC,1000);
    }
})

document.querySelector('#stopChanging').addEventListener('click',function(){
    clearInterval(changeBGC);
    changeBGC=null;  // Flushing out previously overrided values for cleaner code.
})

