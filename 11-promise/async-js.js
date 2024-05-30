// 1. callback
const add = (a, b, callback) => {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        callback(new Error('Invalid arguments'));
        return;
    }
    callback(null, a + b);
};

const res = add(2, 3, (error, result) => {
    if (error) console.error(error);
    console.log({result});
});


// 2 Promise

new Promise((resolve) => {
    console.log(1);
    resolve(2);
}).then(result => console.log(result))

console.log(3);

// 1 3 2