function hotelCost(days) {
    var totalPrice = 0;
    if (days <= 10) {
        totalPrice = days * 100;
    } else if (days <= 20) {
        totalPrice = days * 80;
    } else if (days > 20) {
        totalPrice = days * 50
    } else {
        totalPrice = "Sorry We didn't get your price. Try Again"
    }
    return totalPrice
}

var result = hotelCost('Hello')
console.log(result)