function range(start, end, direction) {
    if (start == end)
        return start
    else if (((direction < 0) && (start < end)) || ((direction > 0) && (start > end)))
        return []
    return [].concat(start, range(start + direction, end, direction));
}

function sum(range) {
    return range.reduce(function (acc, current) {
        return acc + current
    });
}

console.log(range(1, 10, 1));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10, 1)))
// -> 55
