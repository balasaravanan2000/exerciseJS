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
}