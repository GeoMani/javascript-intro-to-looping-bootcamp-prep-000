function makeArray() {
  const array = []
  const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }

  return [array, t]
}


function forLoop(array) {
  array = 0;
  for (let array = 1; array <= 25; array++) {
    if (array === 1) {
      array = [...array, "I am " + i + " strange loop."];
   }
   else {
      array = [...array, "I am " + i + " strange loops."];
   }
  }
}