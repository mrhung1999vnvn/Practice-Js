function foo() {
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve();
      }, 3000);
    });
  }
  
  function bar() {
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve();
      }, 3000);
    });
  }
  
  
  var start = Date.now();
  
  Promise.all([
    foo(),
    bar()
  ])
  .then(function() {
    console.log('Promise.all', Date.now() - start);
  });
  
  
  start = Date.now();
  foo()
  .then(bar)
  .then(function(){
    console.log('chain .then', Date.now() - start);
  });