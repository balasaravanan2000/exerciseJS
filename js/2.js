/*function on(){
    document.getElementById("bulb").src="/exerciseJS/images/dont-forget-to-turn-the-light-off.webp";
}
function off(){
    document.getElementById("bulb").src="/exerciseJS/images/hand-pulling-chain-to-turn-off-light-bulb-green-background.webp";
}*/
window.onload = function() {
let r=5;
let h=8;
function volume(){
    return 3.14*r*r*h;
}
let z=volume();
document.getElementById("AC").innerHTML= +z;





function triangle(b,h){
    return (1/2)*b*h;
}
let x=triangle(5,8);
document.getElementById("at").innerHTML= +x;


{
 let x=5;
 let y=2;
 let z=x*y;
document.getElementById("mul").innerHTML= +z;
}

const car={
    modelname:"jaguar",
    year:2020,
    scope:"best to buy"

};
document.getElementById("cars").innerHTML= car.modelname + car.year +car.scope;
}