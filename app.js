// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = flattened.flat();
console.log(result);
// expected result: [0, 1, 2, 3, 4, 5]
