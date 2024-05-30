
export default function createIteratorObject(report) {
rt default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this.prototype.constructor;
  }

  cloneCar() {
    return new (this.constructor[Symbol.species])();
  }
}
  const result = [];
  for (const idx of Object.values(report.allEmployees)) {
    result.push(...idx);
  }
  return result;
}
