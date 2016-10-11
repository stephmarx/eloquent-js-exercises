// Provided functions
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// My code

function findMother(person) {
  return byName[person.mother]; 
}

function ageDifference(person1, person2) {
	return Math.abs(person1.born - person2.born); 
}

var allAgeDifferences = [];

ancestry.forEach(function(person){
  var mother = findMother(person);
  if (mother) {
    allAgeDifferences.push(ageDifference(person, mother)); 
  }
});

console.log(average(allAgeDifferences));

// Another great solution here: https://gist.github.com/spamwax/99f1a2d9f21ed463d157
