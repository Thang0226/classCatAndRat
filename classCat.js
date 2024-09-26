class Cat {
  constructor(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.max_speed = speed;
  }

  squeak() {
    alert("Meo meo meo!");
  }

  catch(rat) {
    if (this.max_speed <= rat.speed) return;
    rat.caught = true;
    document.write(`${this.name} has caught ${rat.name} <br>`);
  }

  eat(rat) {
    if (rat.state == false || rat.caught == false) return;
    this.weight += rat.weight;
    rat.die();
    document.write(`${rat.name} is eaten. <br>`);
  }
}
