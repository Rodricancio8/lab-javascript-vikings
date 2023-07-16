// Soldier
class Soldier {
        constructor(health, strength) {
            this.health = health
            this.strength = strength

            }
        attack(){
                return this.strength
        }

        receiveDamage(damage){
           this.health = this.health - damage
            return 
        }
    }




// Viking

class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name

    }

    receiveDamage(damage){
        this.health = this.health - damage
        this.damage = damage

        if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;

    } 
        else {
      return `${this.name} has died in act of combat`
        }
        }


   battleCry(){
    return "Odin Owns You All!"
   }
}

class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength)
    }
    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health = this.health - damage
    
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
    
        else {
            return `A Saxon has died in combat`
        }
    }
    }

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(vikingObject){
        this.vikingArmy.push(vikingObject)
    }
    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject)
    }
    vikingAttack(){
        Saxon.receiveDamage() === Viking.strength
        if(Saxon.health < 0){
         return this.saxonArmy.splice(SaxonIndex,1)
        }
        return Saxon.receiveDamage(Viking.strength)

    }

    saxonAttack(){
        Viking.receiveDamage() === Saxon.strength
    }

    showStatus(){
        if (this.saxonArmy === "") {
            return "Vikings have won the war of the century!"
          } 
          
          else if (this.vikingArmy.length === "") {
            return "Saxons have fought for their lives and survived another day..."
          } 
          
          else {
            return "Vikings and Saxons are still in the thick of battle."
          }
        }
      }
