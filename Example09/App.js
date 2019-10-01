/*
1. Promises are used to handle asynchronous operations in JavaScript. It comes handy when you are dealing with multiple asynchronous operations where callbacks can create callback.

2. A Promise has four states:
	- fulfilled: Action related to the promise succeeded
	- rejected: Action related to the promise failed
	- pending: Promise is still pending i.e neither fulfilled nor rejected yet
	- settled: Promise has fulfilled or rejected

3. A promise can be created using Promise constructor.

	example
	-------*/

	var promise = new Promise(function(resolve, reject){
	     //do something
	});

/*
4. Promise constructor takes only one argument,a callback function. Callback function takes two arguments, resolve and reject. Perform operations inside the callback function and if everything went well then call resolve. If desired operations do not go well then call reject.

	example
	-------*/

	var promise = new Promise(function(resolve, reject) { 
	  const x = "moin"; 
	  const y = "moin"

	  if(x === y) { 
	    resolve(); 
	  } else { 
	    reject(); 
	  } 

	}); 

	promise.then(function () { 
	  		alert('Success, You are a GEEK'); 
	  	}
	).catch(function () { 
      		alert('Some error has occured'); 
	  	}
	);

/*
5. then() method takes two functions as parameters. First function is executed if promise is resolved and a result is received. Second function is executed if promise is rejected and an error is received.

	example
	-------*/
	var promise = new Promise(function(resolve, reject) { 
	  const x = "moin"; 
	  const y = "moin"

	  if(x === y) { 
	    resolve('Succeed resolved'); 
	  } else { 
	    reject('Error rejected'); 
	  } 

	});
	  
	promise.then(function(successMessage) { 
	      alert(successMessage); 
	    }, function(errorMessage) { 
	      alert(errorMessage); 
	    }
	);

/*
6. catch() is invoked when a promise is either rejected or some error has occured in execution. It takes only one function as parameter.

	example
	-------*/
	var promise = new Promise(function(resolve, reject) { 
	  const x = "moin"; 
	  const y = "moina"

	  if(x === y) { 
	    resolve('Succeed resolved'); 
	  } else { 
	    reject('Error rejected'); 
	  } 

	});
	  
	promise.then(function(successMessage) { 
	      alert(successMessage); 
	    }
	).catch(function(errorMessage) { 
	      alert(errorMessage); 
	    }
	);

/*
7. You can throw Error like this

	example
	-------*/
	var promise = new Promise(function(resolve, reject) { 
	  const x = "moin"; 
	  const y = "moina"

	  if(x === y) { 
	    resolve('Succeed resolved'); 
	  } else { 
	    throw new Error('Some error has occured');
	  } 

	});
	  
	promise.then(function(successMessage) { 
	      alert(successMessage); 
	    }
	).catch(function(errorMessage) { 
	      alert(errorMessage); 
	    }
	);

/*
8. finally() has no arguments. In finally() we don’t know the promise is successful or not. It is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.

	example
	-------*/
	var promise = new Promise(function(resolve, reject) { 
	  const x = "moin"; 
	  const y = "moin"

	  if(x === y) { 
	    resolve('Succeed resolved'); 
	  } else { 
	    reject('Some error has occured');
	  } 

	});
	  
	promise.finally(() => 
	      alert("Promise ready, stop loading indicator")
	).then(function(successMessage) { 
	      alert(successMessage); 
	    }
	).catch(function(errorMessage) { 
	      alert(errorMessage); 
	    }
	);
