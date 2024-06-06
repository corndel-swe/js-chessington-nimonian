export class Maths {
  static PI = 3.14

  static max(a, b) {
    return (a + b + Maths.abs(b - a)) / 2
  }

  static abs(a) {
    return a > 0 ? a : -a
  }
}
