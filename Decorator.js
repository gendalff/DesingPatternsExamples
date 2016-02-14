/*
The Decorator
The Decorator pattern attaches additional resposibilities to an object dynamically.
Decorators provide a flexible alternative to subclassing for extending functionality.
*/

var Beverage = function(description, price, condiment){
    this.description = description;
    this.price = price;
    this.condiment = condiment;
    this.getCost = function(){
        var total = this.price;
        if(this.condiment) total += this.condiment.getCost();
        return  total;
    } 
    this.getDescription = function(){
        var total = this.description;
        if(this.condiment) total = this.condiment.getDescription() + total;
        return  total;
    } 
}

var espresso = new Beverage("espresso", 15);
espresso = new Beverage(", soy", 2, espresso);
espresso = new Beverage(", milk", 3, espresso);

console.log(espresso.getCost());
console.log(espresso.getDescription() + "makes total price: " + espresso.getCost() + "UAH");