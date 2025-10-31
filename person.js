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
  }

  haveBirthday() {
    this.age++;
    return `Happy birthday! Now ${this.age} years old.`;
  }
}

// Example usage:
const person1 = new Person("Alice", 25);
console.log(person1.introduce()); // "Hi, I'm Alice and I'm 25 years old."
console.log(person1.haveBirthday()); // "Happy birthday! Now 26 years old."

