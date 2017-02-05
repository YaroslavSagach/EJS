var ancestry = require('./ancestry.json');

function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return Math.round(array.reduce(plus) * 10 / array.length ) / 10;
}

function filterByCentury(person, century) {
    return century == Math.ceil(person.died / 100);
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
for (var century = 16; century < 22; century++) {
    console.log( century + " : " + average(
        ancestry.filter(
            function(person) {
                return filterByCentury(person, century);
            }
        ).map(
            function(person) {
                return person.died - person.born
            }
        )
    ));
}

