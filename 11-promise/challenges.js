// Promise

/*
Challenge 1
Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout. 
Print the contents of the promise after it has been resolved by passing console.log to .then
 */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolved!'), 1000);
})

promise1.then(console.log);


/*
Challenge 2
Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout.
Print the contents of the promise after it has been rejected by passing console.log to .catch
*/

const promise2 = new Promise((resolve, reject) => {
    reject('Rejected!');
})

promise2.catch(error => console.log(error));


/*
Challenge 3
Promises are asynchronous and we're now going to prove that they indeed are! 
Create a promise and have it resolve with the value of "Promise has been resolved!" 
Then uncomment the code at bottom of Challenge 3. What order do we expect "Promise has been resolved!" and "I'm not the promise!" to print? Why?
*/

promise = new Promise(function (resolve, reject) {
    resolve();
  });
  
  // Uncomment the lines below when ready
  promise.then(() => console.log('Promise has been resolved!'));
  console.log("I'm not the promise!");


/*
Challenge 4
Write a function delay that returns a promise. 
And that promise should return a setTimeout that calls resolve after 1000ms
*/

function sayHello() {
    console.log('Hello');
  }

function delay(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    })
}

// This code should log "Hello" after 1000ms
delay().then(sayHello);


/*
Challenge 5
This challenge we'll chain promises together using ".then"
Create two variables: firstPromise and secondPromise. 
Set secondPromise to be a promise that resolves to "Second!"
Set firstPromise to be a promise that resolves to secondPromise 
Call the firstPromise with a ".then", which will return the secondPromise> promise. 
Then print the contents of the promise after it has been resolved by passing console.log to .then
*/
const secondPromise = new Promise((resolve) => {
    resolve('Second!');
})

const firstPromise = new Promise((resolve) => {
    resolve(secondPromise);
});


firstPromise.then(result => console.log(result));

/*
Challenge 7
We have a API that gets data from a database, it takes an index parameter and returns a promise 
Your challenge is to use Promise.all to make 3 API calls and return all the data when the calls are complete
*/

const fakePeople = [
    { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
    { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
    { name: 'Harold', hasPets: true, currentTemp: 98.3 },
  ]
  
  const fakeAPICall = (i) => {
    const returnTime = Math.floor(Math.random() * 1000);
    return new Promise((resolve, reject) => {
      if (i >= 0 && i < fakePeople.length) {
        setTimeout(() => resolve(fakePeople[i]), returnTime);
      } else {
        reject({ message: "index out of range" });
      }
    });
  };
  
  function getAllData() {
    const promisesArr = [fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]
    return Promise.all(promisesArr)
        .then(result => {return result});
  }

  getAllData().then(data => {console.log(data)});


  /*
  Challenge 7
  Make your implementation of Promise.all()
  */

  function Promise_all(promisesArr) {
    return new Promise((resolve, reject) => {
        let results = new Array(promisesArr.length); 
        let resultsCounter = 0;

        if (promisesArr.length === 0) {
            resolve(results);
            return;
        }

        promisesArr.forEach((promise, index) => {
            promise
                .then(res => {
                    results[index] = res;
                    resultsCounter++;

                    if (resultsCounter === promisesArr.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

const promises = [
    fakeAPICall(0),
    fakeAPICall(1),
    fakeAPICall(2)
];

Promise_all(promises)
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });