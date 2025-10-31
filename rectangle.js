// Class 3: Rectangle - Represents a rectangle shape
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  scale(factor) {
    this.width *= factor;
    this.height *= factor;
    return `Scaled by ${factor}x. New dimensions: ${this.width} x ${this.height}`;
  }
}

// Example usage:
const rect = new Rectangle(5, 10);
console.log(`Area: ${rect.getArea()}`); // "Area: 50"
console.log(`Perimeter: ${rect.getPerimeter()}`); // "Perimeter: 30"
console.log(rect.scale(2)); // "Scaled by 2x. New dimensions: 10 x 20"
