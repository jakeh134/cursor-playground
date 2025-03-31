// JavaScript Loops and Iteration Methods

// 1. For Loop
console.log('=== Basic For Loop ===');
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i + 1}`);
}

// 2. While Loop
console.log('\n=== While Loop ===');
let count = 0;
while (count < 3) {
    console.log(`Count is: ${count}`);
    count++;
}

// 3. Do-While Loop (executes at least once)
console.log('\n=== Do-While Loop ===');
let doCount = 0;
do {
    console.log(`Do-While count: ${doCount}`);
    doCount++;
} while (doCount < 3);

// 4. For...of Loop (iterating over arrays)
console.log('\n=== For...of Loop ===');
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
    console.log(`Current fruit: ${fruit}`);
}

// 5. For...in Loop (iterating over object properties)
console.log('\n=== For...in Loop ===');
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 6. Array Methods for Iteration
console.log('\n=== Array Iteration Methods ===');

// forEach
console.log('forEach:');
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});

// map
console.log('\nmap:');
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log('Original numbers:', numbers);
console.log('Doubled numbers:', doubled);

// filter
console.log('\nfilter:');
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// reduce
console.log('\nreduce:');
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);

// 7. Nested Loops
console.log('\n=== Nested Loops ===');
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// 8. Break and Continue
console.log('\n=== Break and Continue ===');
// Break example
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(`Before break: ${i}`);
}

// Continue example
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(`After continue: ${i}`);
}

// 9. Async/Await with Loops
console.log('\n=== Async/Await with Loops ===');
async function processItems(items) {
    for (const item of items) {
        // Simulate async operation
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Processed: ${item}`);
    }
}

// Example usage of async loop
const items = ['item1', 'item2', 'item3'];
processItems(items).then(() => {
    console.log('All items processed!');
}); 