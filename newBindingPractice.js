/*
  Create a function that you can create new superheroes with
  Each super hero should have:
    - a name,
    - a power,
    - a battle cry,
    - a function to shout the battle cry
    - a function to use the super power
*/

function Superhero(name, power, battleCry, shout, usePower) {
  this.name = name;
  this.power = power;
  this.battleCry = battleCry;
  this.shout = function() {
    console.log(this.battleCry);
  };
  this.usePower = function(){
    console.log(this.name + " uses " + this.power);
  };
}

var flash = new Superhero("flash", "The speedforce", "too slow!");
var hoover = new Superhero("Hoover", "Unlimited consumption", "nom nom!");
var nightCrawler = new Superhero("nightCrawler", "teleportation", "BAMF!");
