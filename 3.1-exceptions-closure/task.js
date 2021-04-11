'use srtict';

function parseCount(number) {
    const parseNumber = Number.parseInt(number);
    if (Number.isNaN(parseNumber)) {
        const isNuNError = new Error('Невалидное значение');
        throw isNuNError;
    }

    return parseNumber;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (isNuNError) {
        return isNuNError;
    }

}

class Triangle {
    constructor(a, b, c) {
        this.a = parseInt(a);
        this.b = parseInt(b);
        this.c = parseInt(c);
        this.getCondition();
    }
    getCondition() {
        if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        const perimetr = (this.a + this.b + this.c);
        return parseFloat(perimetr);
    }

    getArea() {
        const perimetr = this.getPerimeter() / 2;
        const square = Math.sqrt(perimetr * (perimetr - this.a) * (perimetr - this.b) * (perimetr - this.c));
        console.log(square);
        return parseFloat(square.toFixed(3));
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getArea() {
                return err;
            },
            getPerimeter() {
                return err;
            }
        };
    }
}