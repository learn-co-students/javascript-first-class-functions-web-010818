function receivesAFunction (someFunc) {
  someFunc();
}

function returnsANamedFunction() {
  return function namedFunc() {
    return 'this is a named function.';
  }
}

function returnsAnAnonymousFunction() {
  return function () {
    return 'a function has no name.';
  }
}
