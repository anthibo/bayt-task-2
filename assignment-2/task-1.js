// Write a
// function called all which accepts an array and a callback and returns true
// if every value in the array returns true when passed as a parameter to the callback function.


const all = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true
}

const allAreLessThanSeven = all([1, 2, 9], function (num) {
    return num < 7;
});

console.log(allAreLessThanSeven); // false