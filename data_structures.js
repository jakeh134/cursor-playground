// Basic Data Types in JavaScript

// 1. Numbers (both integers and floating-point)
const integer = 42;
const float = 3.14;
const negative = -10;
const scientific = 1.23e5; // 1.23 × 10^5

// 2. Strings (text)
const singleQuotes = 'Hello, World!';
const doubleQuotes = "This is also a string";
const templateLiteral = `The value is ${integer}`; // String interpolation

// 3. Booleans (true/false)
const isTrue = true;
const isFalse = false;

// 4. Undefined and Null
let undefinedVariable;
const nullVariable = null;

// 5. Arrays (ordered lists)
const fruits = ['apple', 'banana', 'orange'];
const mixedArray = [1, 'two', true, null, { name: 'John' }];

// 6. Objects (key-value pairs)
const person = {
    name: 'John Doe',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'gaming'],
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    }
};

// 7. Sets (unique values)
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]); // Will only contain [1, 2, 3, 4]

// 8. Maps (key-value pairs with any type of key)
const userMap = new Map();
userMap.set('id', 1);
userMap.set('name', 'Jane');
userMap.set(true, 'This is a boolean key');

// 9. Date object
const currentDate = new Date();
const specificDate = new Date('2024-03-20');

// Example of using these data structures
console.log('=== Basic Data Types ===');
console.log('Integer:', integer, typeof integer);
console.log('Float:', float, typeof float);
console.log('String:', singleQuotes, typeof singleQuotes);
console.log('Boolean:', isTrue, typeof isTrue);

console.log('\n=== Arrays ===');
console.log('Fruits array:', fruits);
console.log('First fruit:', fruits[0]);
console.log('Array length:', fruits.length);

console.log('\n=== Objects ===');
console.log('Person object:', person);
console.log('Person name:', person.name);
console.log('Person city:', person.address.city);

console.log('\n=== Sets ===');
console.log('Unique numbers:', uniqueNumbers);
console.log('Has number 2?', uniqueNumbers.has(2));

console.log('\n=== Maps ===');
console.log('User map:', userMap);
console.log('User name:', userMap.get('name'));

console.log('\n=== Dates ===');
console.log('Current date:', currentDate);
console.log('Specific date:', specificDate); 