/*
The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    Factory Method lets a class defer instantiations to subclasses. 
The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.
*/

var PizzaStore = function(name){
    this.name = name;    
}
PizzaStore.greeting = function(){
    return "Welcome to the " + this.name;
}


var NYPizzaStore = function(){
    PizzaStore.apply(this, aruments);
    
}

NYPizzaStore.prototype = Object.create(PizzaStore.prototype);
NYPizzaStore.prototype.constructor = NYPizzaStore;