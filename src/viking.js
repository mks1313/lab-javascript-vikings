// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;    
  }
  attack() {
    return this.strength; 
  }
  receiveDamage(damage) {
    if(this.health > 0) {
      this.health -= damage; 
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack() {
    return this.strength;
  }
  
  receiveDamage(damage) { 
    this.health -= damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    else {
      return `${this.name} has died in act of combat`;
    }
  }
  
  battleCry() {
    return "Odin Owns You All!";
  }
}







// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
      if(this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      }
       
     else {
      return `A Saxon has died in combat`;
     }
  } 
  
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  
  addViking(Viking) {
    this.vikingArmy.push (Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push (Saxon);
  }
  vikingAttack() { 
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxon = this.saxonArmy[randomSaxonIndex];
    const viking = this.vikingArmy[randomVikingIndex];
    const damage = viking.attack();
    const result = saxon.receiveDamage(damage);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;
  }
  saxonAttack() {
       const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const saxon = this.saxonArmy[randomSaxonIndex];
      const viking = this.vikingArmy[randomVikingIndex];
      const damage = saxon.attack();
      const result = viking.receiveDamage(damage);
      if (viking.health <= 0) {
        this.vikingArmy.splice(randomVikingIndex, 1);
      }
      return result;
      
  }
  showStatus() {
      if (!this.saxonArmy.length) {
        return "Vikings have won the war of the century!";
      } else if (!this.vikingArmy.length) {
        return "Saxons have fought for their lives and survived another day...";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    }
    
  }



