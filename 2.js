
//2. ​ How to create a Javascript class in ES6? Write code with example using
//inheritance

class Cat { 
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Lion extends Cat {
    speak() {
      super.speak();
      console.log(`${this.name} roars.`);
    }
  }
  
  let l = new Lion('Fuzzy');
  l.speak(); 
  // Fuzzy makes a noise.
  // Fuzzy roars.
