// Class 1: Person - Represents a person with basic info
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log("Change again");
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }

  print() { 
    console.log("Hello person")
    const last = "maybe it is fine";
  }

  haveBirthday() {
    this.age++;
    return `Happy birthday! Now 25 years old.`;
  }
}

console.log();
