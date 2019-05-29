// Maths, vectors obj

class Vector2d {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    add(vector) {
        return new Vector2d(vector.x + this.x, vector.y + this.y);
    }
    substract(vector) {
        return new Vector2d(vector.x - this.x, vector.y - this.y);
    }
    multiply(scalar) {
        return new Vector2d(this.x * scalar, this.y * scalar);
    }
    divide(scalar) {
        return new Vector2d(this.x / scalar, this.y / scalar);
    }
    getMagnitude() {
        return Math.hypot(this.x, this.y);
    }
    normalize() {
        return this.divide(this.getMagnitude());
    }
}

export default Vector2d;