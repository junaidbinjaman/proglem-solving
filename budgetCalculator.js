function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + mobilePrice + laptopPrice
    return total
}

var result = budgetCalculator(2, 3, 4)
console.log(result)