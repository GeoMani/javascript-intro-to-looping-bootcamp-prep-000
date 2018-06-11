function forLoop(array) {
  array = [];
  
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am " + i + " strange loop.");
   }
   else {
      array.push("I am " + i + " strange loops.");
   }
  }
  return array;
}

function whileLoop(number) {
  let countdown = number;
  
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}

function doWhileLoop(array) {
  return Math.random() >= 0.5
}

  do {
    array.pop();
    maybeTrue();
    console.log(array);
  }
  while (array.length > 0 && maybeTrue());
