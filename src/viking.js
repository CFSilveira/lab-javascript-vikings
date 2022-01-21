// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;    
  }
  receiveDamage(damage) {
    super.receiveDamage (damage);
      if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else return `${this.name} has died in act of combat`
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    super.receiveDamage (damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else return `A Saxon has died in combat`
  }
}

// War
class War {
  constructor() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    let defender = Math.floor(this.saxonArmy.length * Math.random());
    let attacker = Math.floor(this.vikingArmy.length * Math.random());

    let dmg = this.saxonArmy[defender].receiveDamage(this.vikingArmy[attacker].strength);

    if (this.saxonArmy[defender].health <= 0) {
      this.saxonArmy.splice(this.saxonArmy[defender]);
    }

    return dmg;
  }

  saxonAttack(){
    let defender = Math.floor(this.vikingArmy.length * Math.random());
    let attacker = Math.floor(this.saxonArmy.length * Math.random());

    let dmg = this.vikingArmy[defender].receiveDamage(this.saxonArmy[attacker].strength);

    if (this.vikingArmy[defender].health <= 0) {
      this.vikingArmy.splice(this.vikingArmy[defender]);
    }

    return dmg;
  }


  showStatus(){}
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
