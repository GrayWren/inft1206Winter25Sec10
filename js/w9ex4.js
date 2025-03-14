console.log("Hello")

//How to define user-defined function
//1. function declaration
function greeting1(){
    console.log("Hello");
}
greeting1();

function greeting2(name){
    //console.log("Hello "+name);
    //console.log('Hello '+name);
    console.log(`Hello ${name} `);

}
greeting2("Riley");

function greeting3(name){

    return `Hello cool ${name}`;
}
let message=greeting3("Riley");
console.log(message);

greeting2();

function sum(num1=0,num2=0){
    return num1+num2
}
console.log(sum(3,6));
console.log(sum(3));
console.log(sum(3,9,9))

//2. Function Exhibition

let f1=sum;
console.log(f1(2,3));

const f2= function(){
    return "Good afternoon";
};

console.log(f2())


//3. Arrow Function

const f3= ()=> "Good afternoon";

const f4 = (n1,n2)=>n1+n2

console.log(f4(1,1))