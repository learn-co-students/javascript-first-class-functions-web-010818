function receivesAFunction(cb){
  cb()
}

function returnsANamedFunction(okay){
  return function okay(){
  }
}

function returnsAnAnonymousFunction(){
  return function (){}
}
