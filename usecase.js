let jerry = new Rat("Jerry", 5, 20);
let nick = new Rat("Nick", 10, 10);
let superRat = new Rat("SuperRat", 3, 50);
let tom = new Cat("Tom", 25, 30);

jerry.squeak();
tom.squeak();

tom.catch(nick);
tom.catch(superRat);
tom.eat(nick);
tom.eat(superRat);
