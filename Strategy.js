/*
STRATEGY
The Stratery Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Stratery lets the algorithm vary independently from clients that use it.
*/

var Charachter = function(title){
    this.title = title;
    this.setWeapon = function(weapon){
        this.weapon = weapon;
    }
    this.fight = function(){
        if(this.weapon){
            console.log(title + ": " + this.weapon.useWeapon());
        }else{
            console.log(title + ": I don't have any weapon! :(");
        }
    }
}

var Knife = function(){
    this.useWeapon = function(){
        return "cutting with knife";
    }
}

var BowAndArrow = function(){
    this.useWeapon = function(){
        return"shooting an arrow with a bow";
    }
}

var Axe = function(){
    this.useWeapon = function(){
        return"Chopping with an axe";
    }
}

var Sword = function(){
    this.useWeapon = function(){
        return"Swinging a sword";
    }
}

var knife = new Knife();
var sword = new Sword();
var bowAndArrow = new BowAndArrow();
var axe = new Axe();

var queen = new Charachter("Queen");
var king = new Charachter("King");
var troll = new Charachter("Troll");
var knight = new Charachter("Knight");

troll.setWeapon(axe);
troll.fight();

queen.fight();

king.setWeapon(bowAndArrow);
knight.setWeapon(sword);
knight.fight();
king.fight();
knight.setWeapon(knife);
knight.fight();


queen.setWeapon(knife);
queen.fight();

console.log("The fight is over!");
