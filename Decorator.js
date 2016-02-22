/*
The Decorator
The Decorator pattern attaches additional resposibilities to an object dynamically.
Decorators provide a flexible alternative to subclassing for extending functionality.
*/

var Beverage = function() {
    this.description = "description";
    this.price = 0;
    this.getCost = function() {
        return this.price;
    }
    this.getDescription = function() {
        return this.description;
    }
}

var Espresso = function() {
    Beverage.call(this);
    this.description = "Espresso";
    this.price = 15;
}

var Tea = function() {
    Beverage.call(this);
    this.description = "Tea";
    this.price = 10;
}

var Americano = function() {
    Beverage.call(this);
    this.description = "Americano";
    this.price = 17;
}


Espresso.prototype = Object.create(Beverage.prototype);
Espresso.prototype.constructor = Espresso;

var Condiment = function(beverage) {
    this.beverage = beverage;
    this.getCost = function() {
        return this.beverage.getCost() + this.price;
    }
    this.getDescription = function() {
        return this.beverage.getDescription() + this.description;
    }
}

var Soy = function(beverage) {
    Condiment.call(this, beverage);
    this.description = ", soy";
    this.price = 2;
}

var Mocha = function(beverage) {
    Condiment.call(this, beverage);
    this.description = ", mocha";
    this.price = 5;
}

var Milk = function(beverage) {
    Condiment.call(this, beverage);
    this.description = ", milk";
    this.price = 3;
}

function display(description, cost) {
    console.log(description + " makes total price: " + cost + "UAH");
}

Soy.prototype = Object.create(Condiment.prototype);
Soy.prototype.constructor = Soy;

var order1 = new Espresso();
order1 = new Soy(order1);
order1 = new Mocha(order1);

var order2 = new Tea();

var order3 = new Americano();
order3 = new Milk(order3);
order3 = new Soy(order3);
order3 = new Mocha(order3);
order3 = new Mocha(order3);

display(order1.getDescription(), order1.getCost());
display(order2.getDescription(), order2.getCost());
display(order3.getDescription(), order3.getCost());