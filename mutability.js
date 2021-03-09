const clone1 = {}
const clone2 = {}

const samePerson = person;

for ( var key in person ) {
    clone1[key] = person[key];
    clone2[key] = person[key];
}

samePerson.age += 1;
samePerson.country = 'FR';