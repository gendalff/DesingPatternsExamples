/*
The Decorator
The Decorator pattern attaches additional resposibilities to an object dynamically.
Decorators provide a flexible alternative to subclassing for extending functionality.
*/

var Beverage = function(){
    this.description = "description";
    this.price = 0;
    this.getCost = function(){
        return  this.price;
    } 
    this.getDescription = function(){
        return  this.description;
    } 
}
var Espresso = function(){
    Beverage.call(this);
    this.description = "Espresso";
    this.price = 15;
}

var Condiment = function(beverage){
    this.beverage = beverage;
    this.getCost = function(){
        var total = 
    }
}

var Soy = function(){
    Condiment.call(this);
    this.description = ", soy";
    this.price = 2;
}


var espresso = new Beverage("espresso", 15);
var soy = new Decorator(", soy", 3);
// espresso = new Beverage(", soy", 2, espresso);
// espresso = new Beverage(", milk", 3, espresso);

console.log(espresso.getCost());
console.log(espresso.getDescription() + "makes total price: " + espresso.getCost() + "UAH");

console.log(soy.getDescription());