function Player(name) {
    this.name = name; 
    this.lvl = 1; 
    this.points = 0
}

Player.prototype.gainXp = function(xp) {
    // add xp to points 
    this.points += xp; 

    // check if current points are above 10 
    if (this.points>=10) {
        this.points-=10; 
        this.lvl++; 
    }
}

Player.prototype.describe = function() {
    return `${this.name} is level ${this.lvl} with ${this.points} experience points.`
}

const player1 = new Player('Bob')
console.log(player1)

player1.gainXp(3)
console.log(player1.describe())
player1.gainXp(7)
console.log(player1)
player1.gainXp(15)
console.log(player1)