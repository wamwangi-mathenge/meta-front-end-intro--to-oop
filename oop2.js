// Write a program that calculates the total cost of buying a pair of shoes.
// Refactor the code using the "this" keyword

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax
        console.log("Total price:", calculation)
    }
}

purchase2.totalPrice()