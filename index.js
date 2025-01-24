let height = 12;
let width = 16;

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

function getHeight() {
  return height;
};

function getWidth() {
  return width;
};

function createRectangle() {
  return new Rectangle(getHeight(), getWidth());
}

console.log(createRectangle());
console.log("I'm here");
