/*
The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    Factory Method lets a class defer instantiations to subclasses. 
The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.
*/

var PizzaStore = function(name){
    this.name = name;    
}
PizzaStore.prototype.greeting = function(){
    return "Welcome to the " + this.name;
}
PizzaStore.prototype.createPizza = function(){
    console.log("createPizza method has not been implemented!");
    return null;    
}

PizzaStore.prototype.orderPizza = function(type){
    console.log(this.name + ": Order received, please wait.");
    var pizza = this.createPizza(type);
    
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
}

var Pizza = function(name, dough, sauce, toppings){
    this.name = name || "Margarita";
    this.dough = dough || "default";
    this.sauce = sauce || "ketchup";
    this.toppings = toppings || ["cheese"];
}

Pizza.prototype.prepare = function(){
    console.log("Prepairing " + this.name);
    console.log("Tossing dough...");
    console.log("Adding sauce...");
    console.log("Adding toppings:");
    for(var i = 0; i< this.toppings.length; i++){
        console.log("adding " + this.toppings[i]);
    }
}

Pizza.prototype.bake = function(){
    console.log("bake for 2min by 350 Cel.");
}

Pizza.prototype.cut = function(){
    console.log("Cutting into diagonal slices");    
}
Pizza.prototype.box = function(){
    console.log("Put into official boxes");
    console.log("Enjoy your " + this.name + "pizza!")
}
Pizza.prototype.getName = function(){
    return this.name;
}

var Margarita = function(){
    Pizza.apply(this);
}
Margarita.prototype = Object.create(Pizza.prototype);
Margarita.prototype.constructor = Margarita;

var MargaritaNY = function(){
    Pizza.apply(this, ["NewRita"]);
}
MargaritaNY.prototype = Object.create(Pizza.prototype);
MargaritaNY.prototype.constructor = MargaritaNY;

var NYCheese = function(){
    Pizza.apply(this, ["A lot of cheeeeese!", "default", "Heinz", ["cheese", "cheese", "cheese"]]);
}
NYCheese.prototype = Object.create(Pizza.prototype);
NYCheese.prototype.constructor = NYCheese;


var NYPizzaStore = function(/*Store name, */){
    PizzaStore.apply(this, arguments);
}

NYPizzaStore.prototype = Object.create(PizzaStore.prototype);
NYPizzaStore.prototype.constructor = NYPizzaStore;
NYPizzaStore.prototype.createPizza = function(type){
    switch (type){
        case "cheese":
            return new NYCheese();
        break;
        case "veggie":
        break;
        default:
            return new MargaritaNY();
    }
}

var KyivMargarita = function(){
                    // name, dough, sauce, toppings
    Pizza.apply(this, ["KV-Rita", "Kyiv-mlin", "Chumak", ["cheese", "onion"]]);
}
KyivMargarita.prototype = Object.create(Pizza.prototype);
KyivMargarita.prototype.constructor = KyivMargarita;

var KyivCheese = function(){
                    // name, dough, sauce, toppings
    Pizza.apply(this, ["A lot of chese!", "default", "Chumak", ["cheese", "cheese"]]);
}
KyivCheese.prototype = Object.create(Pizza.prototype);
KyivCheese.prototype.constructor = KyivCheese;

var KyivPizza = function(/*Store name, */){
    PizzaStore.apply(this, arguments);
}

KyivPizza.prototype = Object.create(PizzaStore.prototype);
KyivPizza.prototype.constructor = KyivPizza;
KyivPizza.prototype.createPizza = function(type){
    switch (type){
        case "cheese":
            return new KyivCheese();
        break;
        case "veggie":
        break;
        default:
            return new KyivMargarita();
    }
}


var nyps = new NYPizzaStore("NYPS");
var pizzaKyi = new KyivPizza("Khreshchatyk");
nyps.orderPizza("cheese");
nyps.orderPizza();
pizzaKyi.orderPizza("cheese");
pizzaKyi.orderPizza();
