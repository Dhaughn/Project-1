class horse {
constructor(name,muscle) {
this.name = name;
this.muscle = muscle;
this.energy = 100;
this.speed = 0;
this.position = 0;
  }

accelerate() {
  this.speed += this.muscle;
  }

brake() {
  this.speed -= 1;
  }

move () {
this.position += this.speed;
  }

stop () {
this.speed = 0;
  }
}


class racesim {
  constructor(horses) {
    this.horses = horses;
  }
  simulaterace() {
    for(var i = 0; i < this.horses.length; i++) {
    var c = this.horses[i];
      c.accelerate();
      c.move();
  }
}

checkfinish() {
  var finish = false;
  for (var i = 0; i < this.horses.length; i++) {
    var c = this.horses[i];
    if(c.position > 90) {
      finish = true;
    }
  }
  return finish;
}

simulate() {
  while(!this.checkfinish()) {
    this.simulaterace();
  }
  for(var i = 0; i < this.horses.length; i++) {
    console.log(this.horses[i]);
    }
  }
}

var horse1 = new horse("fast", 3);
var horse2 = new horse("slowNsteady", 2);
var race = new racesim([horse1, horse2]);

race.simulate();
