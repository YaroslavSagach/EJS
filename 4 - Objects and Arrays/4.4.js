function deepEqual(first, second) {
    if (typeof first != typeof second)
        return false;
    else if (typeof first == "object" && first != null) {
        if (Object.keys(first).length != Object.keys(second).length)
            return false;
        else {
            var result = true;
            for(var key in first){
                result = result && deepEqual(first[key], second[key]);
            }
            return result;
        }
    } else
        return first === second;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 3}));
// → false
console.log(deepEqual(obj, {here: {is: "an", err: "wrong"}, object: 3}));
// → false