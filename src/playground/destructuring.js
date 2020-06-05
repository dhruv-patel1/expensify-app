//Object Destructuring 
/* const person = {
    name: "Dhruv",
    age: 21,
    location:{
        city: "Edison",
        temp: 80
    }
};

const {name = "Anonymous", age, location} = person;
const name = person.name;
const age = person.age; 

console.log(`${name} is ${age} years old.`);

const {city: place, temp: temperature} = person.location;

if(temperature && place){
    console.log(`It's ${temperature} degrees in ${place}`)
} */
/* const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher:{
        name: "Penguin"
    }
}

const {name:publisherName = "Self-Published"} = book.publisher;

console.log(publisherName) */


//Array Destructuring

const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];

const [street, city, state ="New York", zip] = address;

console.log(`You're in ${city} ${state}.`)

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2,.75"];

const [product, small, medium, large] = item;

console.log(`A medium ${product} costs ${medium}`);