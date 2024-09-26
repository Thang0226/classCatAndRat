class Rat {
  constructor(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.state = true;
    this.caught = false;
  }

  squeak() {
    alert("Chit chit chit!");
  }

  die() {
    this.state = false;
  }
}
