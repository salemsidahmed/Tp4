const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("firsttttttttt !"), 250);
});

const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("secondddddddddddd!");
  }, 100);
});

// myFirstPromise.then((data) => console.log(data));
// mySecondPromise.then((data) => console.log(data));

console.log("En fin ============ ");

let promiseArray = [myFirstPromise, mySecondPromise];
Promise.all(promiseArray)
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
