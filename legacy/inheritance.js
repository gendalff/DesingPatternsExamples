//implementing a ZOO

var Mammal = function(name) {
    if (name) this.name = name;
}
Mammal.prototype.bornChild = function() {
    console.log(this.name + " borns a new Child");
}
Mammal.prototype.breastfeeding = function() {
    console.log(this.name + " feeding with brest");
}

var Herbivorous = function(name) {
    Mammal.call(this, name);
    this.eat = this.chew;
}
Herbivorous.prototype = Object.create(Mammal.prototype);
Herbivorous.prototype.chew = function() {
    console.log(this.name + " eating some plant");
}
Herbivorous.prototype.constructor = Herbivorous;

var Predator = function(name) {
    Mammal.call(this, name);
    this.eat = this.bite;
}

Predator.prototype = Object.create(Mammal.prototype);
Predator.prototype.constructor = Predator;
Predator.prototype.bite = function() {
    console.log(this.name + " bites some animal");
};
Predator.prototype.kill = function() {
    console.log("Kill when I'm Hungry");
};

var Mixed = function(name) {
    Herbivorous.call(this, name);
    Predator.call(this);
}
Mixed.prototype = Object.create(Herbivorous.prototype);
for (var i in Predator.prototype) Mixed.prototype[i] = Predator.prototype[i];
Mixed.prototype.constructor = Mixed;


var ship = new Herbivorous("Ship");
var wolf = new Predator("Wolf");
var human = new Mixed("Eva");


ship.chew();
ship.bornChild();
ship.eat();
ship.breastfeeding();
wolf.bite();
wolf.bornChild();
wolf.eat();
wolf.kill();
human.chew();
human.bite();
human.bornChild();
human.eat();
human.breastfeeding();
human.kill();