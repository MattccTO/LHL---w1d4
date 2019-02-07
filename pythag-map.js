var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(index) {
  var squares = 0;
  for (var i in index) {
    squares += Math.pow(index[i], 2);
  }
  return (Math.sqrt(squares));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);