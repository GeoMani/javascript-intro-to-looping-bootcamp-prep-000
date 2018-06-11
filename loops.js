function makeArray() {
  const array = []
  const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }

  return [array, t]
}


function forLoop(array) {
  for (let i = 1; i <= 25; i++) {
    if (i === 1) {
      array = [...array, "I am " + i + " strange loop."];
   }
   else {
      array = [...array, "I am " + i + " strange loops."];
   }
  }
}