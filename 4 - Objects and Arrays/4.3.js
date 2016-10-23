function prepend(value, list) {
    return { value: value, rest : list }
}

function arrayToList(array){
    if (array.length > 0){
        return prepend(array.shift(), arrayToList(array));
    } else
        return null;
}

function listToArray(list) {
    var array = [];
    for(var node = list; node; node = node.rest)
        array.push(node.value);
    return array;
}

function nth(list, index) {
    if (index != 0)
        return nth(list.rest, index - 1);
    else
        return list.value
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20