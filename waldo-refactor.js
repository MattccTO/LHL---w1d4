// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var count = 0;
  arr.forEach(function(arr) {
    if (arr === "Waldo") {
      found(count);
    }
    count++;
  });
};

function actionWhenFound(index) {
  console.log(`Found him at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// // The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }
