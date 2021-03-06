class Polygon {
    constructor(height = 3, width = 3) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea()
    }
    calcArea() {
        return this.height * this.width;
    }
}
export default Polygon;