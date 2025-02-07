/*function on(){
    document.getElementById("bulb").src="/exerciseJS/images/dont-forget-to-turn-the-light-off.webp";
}
function off(){
    document.getElementById("bulb").src="/exerciseJS/images/hand-pulling-chain-to-turn-off-light-bulb-green-background.webp";
}*/


//functions
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


//objects
const car={
    modelname:"jaguar",
    year:2020,
    scope:"best to buy"

};
document.getElementById("cars").innerHTML= car.modelname + car.year +car.scope;

const person ={};
person.firstname="bala";
person.lastname="saravanan";
person.age=24;
x=person;
person.nationality="tamil";
document.getElementById("object").innerHTML=x.firstname +x.lastname +"   is  "+x.age + "   year old" + " and he is  " +x.nationality;

const student ={
    name:"bala",
    class:"pg",
     marks:{
        maths :"75",
        science :"75"
     } 
    }
     document.getElementById("nest").innerHTML=student.name +"'s maths marks is " + student.marks.maths;
  
function cone(r,h){
    return (1/3)*3.14*r*r*h;
}
document.getElementById("cone").innerHTML=cone(5,6);


//object methods
const myname= { 
    firstname:"jothi",
    lastname:"balan",
    fullname : function() {
        return this.firstname +" " +this.lastname;
    }
   };
    document.getElementById("obj").innerHTML=myname.fullname();


 const school={
    firstname:"srinivasa",
    lastname:"vidhyalaya",
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
 };
 document.getElementById("sch").innerHTML=school.fullname();

//object constructor
function students(sname,classofstudent,mark,result){
    this.sname=sname;
    this.class=classofstudent;
    this.mark=mark;
    this.result=result;
}
const ram=new students("ram",12,450,"pass");

document.getElementById("constructor").innerHTML=ram.sname;




function cars(name,model,year){
    this.name=name;
    this.model=model;
    this.year=year;
}
const benz=new cars("benz","I6", 2000 );
document.getElementById("constr").innerHTML=benz.name;


