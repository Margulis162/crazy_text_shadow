// var 
const txt = document.getElementById("shadow");

// f(x)
function random(min, max){
    num = Math.floor(Math.random()*(max - min + 1) + min);
    return num;
}

function shadow(){
    let shadows ="2px 2px  black, -2px -2px black,5px 5px 10px black, -5px -5px 10px black,";
    let offset = 2;
    for(let i = 0; i <800; i++){
        // max less than 255 to make colors less bright, inbamance 
        let red = random(0, 150);
        let green = random(0, 150);
        let  blue = random(0, 250);
       
        shadows += `1px ${offset}px rgb(${red}, ${green}, ${blue}),`;
        offset += 1;
        
    }
    txt.style.textShadow = shadows.slice(0, -1);
}
// flow
shadow();