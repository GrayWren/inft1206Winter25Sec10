console.log("Hello");
function calculate(){
    let numOne=document.querySelector("#first-num").value
    let numTwo=document.querySelector("#second-num").value
    let mult=numOne*numTwo;
    document.querySelector("#output").textContent="The multiplication of "+numOne+ " and "+numTwo+" is "+mult;
}
document.querySelector("#btn").addEventListener("click",calculate);