//task 1
let array = [
  { a: 1, b: 2 },
  { a: 2, c: 3 },
  { a: 1, b: 2 },
];

let result = array.reduce(function (accumulator, currentValue) {
  if (
    accumulator.every(function (item) {
      return !(item.t === currentValue.t && item.b === currentValue.b);
    })
  )
    accumulator.push(currentValue);
  return accumulator;
}, []);

console.log(result);



//task 2
let arr = [1, 2, 3, 4, 5, 6];
let i = 0;
function throughArray(arr) {
  i++;
  if (i < arr.length) {
    console.log(arr[i]);
    throughArray(arr);
  }
}

throughArray(arr);



//task 3
function replacementLetters(word) {
  const letters = [
    "а",
    "с",
    "е",
    "р",
    "і",
    "о",
    "х",
    "у",
    "А",
    "В",
    "С",
    "Н",
    "І",
    "К",
    "М",
    "О",
    "Р",
    "Т",
    "Х",
  ];
  let result = [];

  word.split("").map(function (letter) {
    if (letters.includes(letter) && !result.includes(letter)) result.push(letter);
  });
  return result;
}

replacementLetters("дерево");
