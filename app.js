const btn = document.getElementById(`btn`);
let a,b,c;
btn.addEventListener(`click`,function(e){
    a = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${a},${b},${c})`;
});