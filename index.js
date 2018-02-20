function runFiveMiles(){
  console.log("Go for a five-mile run");
}

function liftWeights(){
  console.log('Pump iron');
}

function swimFortyLaps(){
  console.log('Swim 40 laps')
}

//Instead of doing this we're are going to make this function
//more
// function Monday(){
//   runFiveMiles();
//   liftWeights();
// }

function excerciseRoutine(postRunActivity){
  runFiveMiles(); //function
  postRunActivity(); //this is a placeholder for the function
  //we'll pass through the parameter
}

// now we'll pass this new function into our Monday() function
function Monday(){
  excerciseRoutine(liftWeights);
  //When we want to pass a function as a value,
  //we pass it by reference. We
  //do this by omitting the parentheses.
}

//we can re-write our function's second behavior by:
function Tuesday(){
  excerciseRoutine(function(){
    console.log("Strech! Work that core!");
  });
  // "Go for a five-mile run"
  //"Strech! Work that core!"

  //or we can use an arrow function:
  excerciseRoutine(() => {
    console,log('Strech! Work that core!');
  });

  //or even shorter:
  excerciseRoutine(() => console.log("Strech! Work that core!"));
}

function Wednesday(){
  excerciseRoutine(runFiveMiles);
}

function Thursday(){
  excerciseRoutine(liftWeights);
}

function Friday(){
  excerciseRoutine(swimFortyLaps);
}

function morningRoutine(exercise){
  var breakfast = null;

  if(exercise === liftWeights){
    breakfast = 'protein bar';
  } else if (exercise === swimFortyLaps){
    breakfast = 'kale smoothie';
  } else {
    breakfast = "granola";
  }
  excerciseRoutine(exercise);

  //we are not naming this function because it's only
  //available inside morningRoutine, however we can name it if we want
  return function(){
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  }
}


//recieves a function and calls it
function receivesAFunction(postRunActivity){
  postRunActivity();
}

//returns a named function
function returnsANamedFunction(){
  return function food() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  }
}

//returns an anonymous function
function returnsAnAnonymousFunction(){
  return function(){
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  }
}
