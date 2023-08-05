// Write a program that calculates the total cost of buying a pair of shoes.

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay)