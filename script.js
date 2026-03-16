function calculateAge(){

let birth=new Date(document.getElementById("birth").value)

let today=new Date()

let age=today.getFullYear()-birth.getFullYear()

document.getElementById("result").innerText="Age: "+age+" years"

}

function calculateBMI(){

let w=document.getElementById("weight").value

let h=document.getElementById("height").value

let bmi=w/(h*h)

document.getElementById("result").innerText="BMI: "+bmi.toFixed(2)

}
