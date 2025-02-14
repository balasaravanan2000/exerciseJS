let x=new Date();
document.getElementById("date").innerHTML="Today date is" + x;
let TIME=""
let time=x.getHours();
console.log(time);
let min=x.getMinutes();
let sec=x.getSeconds();
let day=x.getDay();

console.log(min);
console.log(sec);
if((time>=12)&&(time<=23)){
    if((min>=0)&&(min<=59)){
        TIME= time + "PM"+ ":" + min + ":" + sec;
    }
    else{
        TIME= time + "AM"+ ":" + min + ":" + sec;;
    }
}
days=[  "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("TODAY" + days[day]);
console.log("CURRENT TIME:" + TIME );
document.getElementById("today").innerHTML="TODAY IS" + days[day] +  "CURRENT TIME:" + TIME;