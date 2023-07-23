/*
JavaScript shape calculators
#1
Make a calculator that will find the area and perimeter of a square.
Сделайте калькулятор, который будет находить площадь и периметр квадрата.
*/
((s) => {
  // s - сторона квадрата
  const perimeter = 4 * s;
  console.log("Периметр квадрата " + perimeter);
  const area = s * s;
  console.log("Площадь квадрата " + area);
})(5);
/*
#2
Make a calculator that will find the area and perimeter of a rectangle.
Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.
*/
((a, b) => {
  //а - длина, b - ширина
  const perimeter = 2 * (a + b);
  console.log("Периметр прямоугольника " + perimeter);
  const area = a * b;
  console.log("Площадь прямоугольника " + area);
})(5, 8);
/*
#3
Make a calculator that will find the area of a circle and the circumference of a circle.
Сделайте калькулятор, который будет находить площадь круга и длину окружности.
*/
((r) => {
  const a = 3.14;
  //r - радиус,  a — это константа, которая выражает отношение длины окружности к диаметру, она приблизительно равна 3,14.
  const area = a * (r * r);
  console.log("Площадь круга " + area);
  const circumference = 2 * a * r;
  console.log("Длина окружности " + circumference);
})(6);
/*
#4
Make a calculator that will find the area of a triangle given three sides.
Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
*/
((a, b, c) => {
  // perimeter - периметр, p - полу-периметр, area - площадь , abc - стороны треугольника
  const perimeter = a + b + c;
  const p = perimeter / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  console.log("Площадь треугольника " + area);
})(5, 5, 5);
