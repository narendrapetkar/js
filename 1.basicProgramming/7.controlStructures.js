num1 = prompt("enter number 1 : ")
num2 = prompt("enter number 2 : ")

// if-else
if(num1>10){
    alert(num1+" is greater than 10")
}
else{
    alert(num1+" is smaller than 10")
}

// nested if else
if(num1 > num2){
    alert(num1+" is greater than "+num2)
}
else if(num1<num2){
    alert(num2+" is smaller than "+num1)
}
else{
    alert(num2+" is equal to "+num1)
}


// switch case
switch(num1){
    case '50':
        console.log("fifty")
        break;
    case '100':
        console.log("century")
        break;
    default:
        console.log(num1+" runs")
        break;
}