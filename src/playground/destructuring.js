// ES6 Object Destructuring

const person = {
    name: 'Nigel',
    age: 23,
    location: {
        city: 'Valley Cottage',
        temp: 65
    }
};

const { name:firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if(city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}


// ES6 Array Destructuring

const address = ['16 Forest Glen Rd', 'Valley Cottage', 'New York', '10989'];

const [, city2, state = 'California'] = address;

console.log(`You are in ${city2} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [hotCoffee, , mediumPrice] = item;

console.log(`A medium ${hotCoffee} cost ${mediumPrice}`);