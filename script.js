// var 
const txt = document.getElementById("shadow");

// f(x)
function random(min, max){
    num = Math.floor(Math.random()*(max - min + 1) + min);
    return num;
}

function shadow(){
    let shadows ="";
    let offset = 2;
    for(let i = 0; i <800; i++){
        range_num_1 = random(0, 255);
        range_num_2 = random(0, 255);
        range_num_3 = random(0, 255);
       
        shadows += `1px ${offset}px rgb(${range_num_1}, ${range_num_2}, ${range_num_3}),`;
        offset += 1;
        
    }
    txt.style.textShadow = shadows.slice(0, -1);
}
// flow
shadow();