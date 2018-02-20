 function receivesAFunction(cb) {
   cb();
 }

 function returnsANamedFunction() {
   return function something() {
     return "something";
   }
 }

function returnsAnAnonymousFunction() {
  return ()=> "somthing";
}
