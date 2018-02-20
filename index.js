function runFiveMiles() {
  console.log('Go for a five-mile run');
}

function liftWeights() {
  console.log('Pump Iron');
}

function swimFortyLaps() {
  console.log('Swim 40 laps');
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function morningRoutine(exercise) {
  var breakfast = null
  if (exercise === liftWeights) {
    breakfast = 'Protein Bar'
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie';
  } else {
    breakfast = 'granola';
  }
  exerciseRoutine(exercise);

  return function () {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`)
  }
}

function receivesAFunction(cb) {
  cb();
}

function returnsANamedFunction() {
  return function hello() {}
}

function returnsAnAnonymousFunction() {
  return function() {}
}
