// variables
let z = 'frank';
const x = 6;

const y = true

const ong = {
    name: 'frank',
    age: 10,
    logedIn:false
}


let num1  = 20
let num2  = 80

if(num1 === num2) {
    console.log("equal")
}else if(num1 < num2){
    console.log("num1 is less")
}else if(num1 > num2){
    console.log("num2 is greater")
}else{
    console.log("Nothing");
}

console.log(ong.logedIn)

const Submit = document.querySelector(".Submit");
const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const errorMessage = document.querySelector(".error")
const answer = document.querySelector(".answer")
document.querySelector(".Clear").addEventListener("click",function(){
    weight.value = ""
    height.value = ""
    answer.textContent = ""
})

function errorHandler(msg){
        errorMessage.textContent = msg
        setTimeout(function(){
            errorMessage.textContent = ""
        }, 5000)
}


Submit.addEventListener("click", function(){
    // console.log(height.value)
    if(height.value === "" || weight.value === ""){
        // errorMessage.textContent = "Please enter something"
        errorHandler("Please enter something")


        // setTimeout(function(){
        //     errorMessage.textContent = ""
        // }, 5000)

    }else if(!Number(height.value) || !Number(weight.value)){
        // errorMessage.textContent = "Please both fields should be numbers"
        // setTimeout(function(){
        //     errorMessage.textContent = ""
        // },3000)
        errorHandler("Please both fields should be numbers")
    }else{
        let h = Number(height.value)
        let w = Number(weight.value)

        let heightm2 = (h/100)*(h/100)
        console.log(heightm2)
        console.log(h+w)
        let bmiValue = w / heightm2
        answer.textContent = bmiValue.toFixed(3)

        // setTimeout(function(){
        //     answer.textContent = ""
        // }, 10000)
        console.log(bmiValue)
    }

})
