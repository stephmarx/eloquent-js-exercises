// Provided function

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// My code

function findCentury(person) {
  return Math.ceil(person.died / 100); 
}

function age(person) {
  return person.died - person.born; 
}

var agesByCentury = {};
ancestry.forEach( function(person){
  var personCentury = findCentury(person);
  if (!agesByCentury[personCentury]){
    agesByCentury[personCentury] = [];
  }
  agesByCentury[personCentury].push(age(person));
});

for (century in ages) {
  console.log(century + ": " + average(agesByCentury[century])); 
}
