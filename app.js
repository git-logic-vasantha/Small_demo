let btn=document.querySelector('button');
let div=document.querySelector('div');
let h1=document.querySelector('h1');

btn.addEventListener("click",function (){
    let rc=getRandomColor();
    h1.innerText=rc;
    div.style.backgroundColor=rc;
});
function getRandomColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color=`rgb(${r},${g},${b})`;
    return color;
}