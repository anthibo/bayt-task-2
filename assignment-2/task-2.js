// Write a function called contains that searches
// for a value in a nested object.It returns true
// if the object contains that value.

function contains(obj, targetVal) {
    if (obj === targetVal) {
        return true;
    }

    if (typeof obj === 'object') {
        for (const key in obj) {
            if (contains(obj[key], targetVal)) {
                return true;
            }
        }
    }

    return false;
}


const nestedObjectExample = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}


const targetValue = 44;
const result = contains(nestedObjectExample, targetValue);
console.log(result); // Output: true