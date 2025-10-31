class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }

  haveBirthday() {
    this.age++;
    return `Happy birthday! Now ${this.age} years old.`;
  }
}
