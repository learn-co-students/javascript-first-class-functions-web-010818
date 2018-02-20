function receivesAFunction(callback){
  return callback();
}

function returnsANamedFunction(name){
  return function name(){ };
}

function returnsAnAnonymousFunction(name){
  return function () {
    name();
  }
}
