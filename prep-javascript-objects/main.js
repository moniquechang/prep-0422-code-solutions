const person = { firstName: 'Monique', lastName: 'Chang', hobby: 'swimming' };
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'quality control analyst';
console.log("The person's current job is:", person.job);
person.previousJob = 'waitress';
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
