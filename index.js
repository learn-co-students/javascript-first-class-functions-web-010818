function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function callback() {}
}

function returnsAnAnonymousFunction() {
  return function(){}
}
