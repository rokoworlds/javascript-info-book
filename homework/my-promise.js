class MyPromise {
    constructor(executor) {
        this.status = 'pending';
        this.value = undefined;
        this.error = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectCallbacks = [];


        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach((cb) => cb(value));
            }
        }

        const reject = (error) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.error = error;
                this.onRejectCallbacks.forEach((cb) => cb(error));
            }
        }

        try {
            executor(resolve, reject);
          } catch (err) {
            reject(err);
          }
    }


    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.status === 'fulfilled') {
                setTimeout(() => {
                    try {
                        resolve(onFulfilled(this.value));
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            } else if (this.status === 'rejected') {
                setTimeout(() => {
                    try {
                        reject(onRejected(this.error))
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            } else {
                this.onFulfilledCallbacks.push(onFulfilled);
                this.onRejectCallbacks.push(onRejected);
            }
        })
    }

    // catch() {
        // work in progress
    // }

    // finally() {
        // work in progress
    // }
}


const promise = new MyPromise((resolve, reject) => {
    console.log('First!')
    setTimeout(() => resolve('Third!'), 1000);
  });
   
  promise.then((result) => console.log(result));

  console.log('Second!')