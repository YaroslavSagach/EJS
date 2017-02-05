var ancestry = require('./ancestry.json');

function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return Math.round(array.reduce(plus) * 10 / array.length ) / 10;
}

var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

function ageDifference(child, mother) {
    return child.born - mother.born;
}

ancestry = ancestry.filter(function (person) {
    return person.mother != null && byName[person.mother] != undefined;
});


// 31.2
console.log(average(
    ancestry.map(function (person) {
        return ageDifference(person, byName[person.mother]);
    })
));