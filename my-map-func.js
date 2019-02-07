var words = ["ground", "control", "to", "major", "tom"];

var map = function(input, callback) {
  var newArray = [];
  for (var i of input) {
    newArray.push(callback(i));
  }
  return newArray;
};

var lengths = map(words, function(word) {
  return word.length;
});

var upper = map(words, function(word) {
  return word.toUpperCase();
});

var reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(`${lengths}\n${upper}\n${reverse}`);
