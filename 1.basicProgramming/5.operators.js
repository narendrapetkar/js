// arithmatic operators

age1 = 10
age2 = 30
// binary operators
console.log("addition : " + age1 + age2)
console.log("substration : " + (age1 - age2))
console.log("multiplication : " + age1 * age2)
console.log("division : " + age1 / age2)
console.log("modulus : " + age1 % age2)

// unary operators
console.log("post increment : " + age1++)
console.log("current age value : " + age1)
console.log("post decrement : " + age1--)
console.log("current age value : " + age1)
console.log("pre increment : " + ++age1)
console.log("current age value : " + age1)
console.log("pre decrement : " + --age1)
console.log("current age value : " + age1)

/*
Comparison operators
x = 5
== 	    equal to 	x == 8 	false 	x == 5 	true 	
=== 	equal value and equal type 	x === "5" 	false 	x === 5 	true 	
!= 	    not equal 	x != 8 	true 	
!== 	not equal value or not equal type 	x !== "5" 	true 	x !== 5 	false 	
> 	    greater than 	x > 8 	false 	
< 	    less than 	x < 8 	true 	
>= 	    greater than or equal to 	x >= 8 	false 	
<= 	    less than or equal to 	x <= 8 	true
*/

// ternary operator

age1 > 15 ? console.log("age1 greates than 15") : console.log("age1 less than 15")