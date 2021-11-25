function receivesAFunction(callback){
    return callback();
}

callback = function(){
    console.log("Hi, Hi!");
}

 function returnsANamedFunction () {
    return callback;
 }
 function returnsAnAnonymousFunction(){
     return function(){
         console.log("This is an anonymous function!")
     }
 }