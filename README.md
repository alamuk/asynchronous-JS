### Use API - 
https://dog.ceo/dog-api/
https://dog.ceo/dog-api/documentation/breed
api end point : https://dog.ceo/api/breed/hound/images/random
https://dog.ceo/api/breed/${data}/images/random

### npm i nodemon -g

### nmp init 

### npm i superagent

### TASK : 1
``` 
we are goging to use the dog.txt file and from here we will read the dog breed.
and then we are going to do an HTTP request to get the random IMAGE of the dog with this breed.( in the text file )
and then save that random image in another text file. 

its a three steps process and of them involve with callback functions. 
we will see one call back function inside another call back functions 
( which creates another problem - pattern called 'Callback Hell')

```

## Promises
### how to consume promises
### superagent get method does the promise. (future value)
``` 
*state of the promises at the begining - 'pending promises' 
when it will come with data  then we consume it - with use-  then() methos which call- 'resolve promise' = full fill or rejected
then method does not come with error option. 
for this we use catch() method
relsolve = successfull case = then () method handle 
rejection = unsuccessfull case = catch() method handle 

```
##ES 8
### Async function 
```
async functions always return a Promise. = means it has resolve and reject fuction automatically and wait for future value.  
The Promise resolves with the value returned by the function.
If an error is thrown, the Promise is rejected with the thrown error.

```
### Await 
```
The await keyword is used in JS to pause the execution of an async function until a Promise is resolved or rejected.
* wait until a Promise is resolved or rejected.
* the async function pauses execution until the Promise is resolved or rejected. 
```

### syntactic sugar for promises 
means - async and await make the promises more looks as a sync and beautiful 