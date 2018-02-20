function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function fn() {}
}

function returnsAnAnonymousFunction() {
  return function () {}
}
