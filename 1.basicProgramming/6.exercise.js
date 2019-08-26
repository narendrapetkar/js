// input name, weight, height for two people and compare their bmi with following formula :
// BMI = weight/height*
// print comparison result stating whose bmi is greater


function bmi(weight, height){
    return weight/(height*height)
}

u1Name = prompt("user1 name : ")
u1weight = prompt("user1 weight : ")
u1Height = prompt("user1 height in mtr")

u1bmi = bmi(u1weight, u1Height)

u2Name = prompt("user2 name : ")
u2weight = prompt("user2 weight : ")
u2Height = prompt("user2 height in mtr")

u2bmi = bmi(u2weight, u2Height)

console.log("u1bmi : " + u1bmi)
console.log("u2bmi : " + u2bmi)

if (u1bmi > u2bmi){
    console.log("u1 bmi is greater")
}
else if(u1bmi < u2bmi){
    console.log("u2 bmi is greater")
}
else {
    console.log("both have equal BMI")
}