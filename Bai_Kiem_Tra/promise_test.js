
// setTimeout(() => {
//     console.log("abc")
// }, 1000);
// console.log("123")

function myf(resolve, reject) {
    console.log("234")
    setTimeout(() => resolve("result"), 1000);
    // setTimeout(() => reject("error"), 100);
  }

let promise = new Promise(myf);
// promise.then(
//     result => console.log(result),
//     // error => console.log(error)
// );
// console.log("123")

promise
  .then(function(data) {
      console.log(data)//result
      return 1;

  })
  .then(function(data) {
      console.log(data)//1
      return 2;
  })
  .then(function(data) {
      console.log(data)//2
      return new Promise(function(resolve){
          console.log("789")
          resolve("123")
      });
  })
  .then(function(data) {
      console.log(data)//123
      return 3;
  })
  .catch(function(error) {
      console.log(error)

  })
  .finally(function() {

  })
  console.log("567")
