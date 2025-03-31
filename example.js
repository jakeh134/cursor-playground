// This is a comment. Comments help explain what the code does and are ignored by JavaScript
// They start with // for single lines or /* */ for multiple lines

// Define a function that converts miles to kilometers
// The conversion rate is: 1 mile = 1.60934 kilometers
function milesToKilometers(miles) {
    // Check if the input is a valid number
    if (typeof miles !== 'number' || isNaN(miles)) {
        return "Please enter a valid number";
    }
    
    // Perform the conversion
    const kilometers = miles * 1.60934;
    
    // Return the result, rounded to 2 decimal places
    return kilometers.toFixed(2);
}

// Kilometers to Miles converter
function kilometersToMiles(kilometers) {
    if (typeof kilometers !== 'number' || isNaN(kilometers)) {
        return "Please enter a valid number";
    }
    const miles = kilometers / 1.60934;
    return miles.toFixed(2);
}

// Meters to Feet converter
function metersToFeet(meters) {
    if (typeof meters !== 'number' || isNaN(meters)) {
        return "Please enter a valid number";
    }
    const feet = meters * 3.28084;
    return feet.toFixed(2);
}

// Feet to Meters converter
function feetToMeters(feet) {
    if (typeof feet !== 'number' || isNaN(feet)) {
        return "Please enter a valid number";
    }
    const meters = feet / 3.28084;
    return meters.toFixed(2);
}

// Interactive example using prompt (works in browser)
// Uncomment these lines if you're running this in a browser:
/*
const userMiles = prompt("Enter the number of miles:");
const result = milesToKilometers(Number(userMiles));
alert(`${userMiles} miles is equal to ${result} kilometers`);
*/

// Test all converters with example values
console.log("Distance Conversion Examples:");
console.log("----------------------------");
console.log("5 miles = " + milesToKilometers(5) + " kilometers");
console.log("8 kilometers = " + kilometersToMiles(8) + " miles");
console.log("10 meters = " + metersToFeet(10) + " feet");
console.log("20 feet = " + feetToMeters(20) + " meters");

// First, let's define what a ConversionRequest object looks like
class ConversionRequest {
    constructor(value, fromUnit, toUnit) {
        this.value = Number(value);
        this.fromUnit = fromUnit.toLowerCase();
        this.toUnit = toUnit.toLowerCase();
    }

    // Method to check if the request is valid
    isValid() {
        return !isNaN(this.value) && 
               ['miles', 'kilometers', 'meters', 'feet'].includes(this.fromUnit) &&
               ['miles', 'kilometers', 'meters', 'feet'].includes(this.toUnit);
    }
}

// Modify the convert function to use our new object
function convert(conversionRequest) {
    // First check if the request is valid
    if (!conversionRequest.isValid()) {
        return "Invalid conversion request. Please check your inputs.";
    }

    const { value, fromUnit, toUnit } = conversionRequest;

    // If units are the same, return original value
    if (fromUnit === toUnit) {
        return `${value} ${fromUnit} = ${value.toFixed(2)} ${toUnit}`;
    }

    // Helper function to convert any unit to meters (our base unit)
    function convertToMeters(val, unit) {
        switch(unit) {
            case 'meters':
                return val;
            case 'feet':
                return val / 3.28084;
            case 'kilometers':
                return val * 1000;
            case 'miles':
                return val * 1609.34; // 1 mile = 1.60934 km = 1609.34 m
            default:
                return null;
        }
    }

    // Helper function to convert meters to any unit
    function convertFromMeters(meters, unit) {
        switch(unit) {
            case 'meters':
                return meters;
            case 'feet':
                return meters * 3.28084;
            case 'kilometers':
                return meters / 1000;
            case 'miles':
                return meters / 1609.34;
            default:
                return null;
        }
    }

    // Convert through meters as the base unit
    const meters = convertToMeters(value, fromUnit);
    const result = convertFromMeters(meters, toUnit);

    return `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

// Example usage of the new convert function
console.log("\nInteractive Converter Examples:");
console.log("------------------------------");
console.log(convert(new ConversionRequest(5, "miles", "kilometers")));
console.log(convert(new ConversionRequest(8, "kilometers", "miles")));
console.log(convert(new ConversionRequest(10, "meters", "feet")));
console.log(convert(new ConversionRequest(20, "feet", "meters")));

// If running in Node.js, we can use the readline module for interactive input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Modify askForConversion to create and use a ConversionRequest object
function askForConversion() {
    rl.question('Enter the value to convert (or "exit" to quit): ', (value) => {
        if (value.toLowerCase() === 'exit') {
            rl.close();
            return;
        }

        rl.question('Enter the unit to convert from (miles/kilometers/meters/feet): ', (fromUnit) => {
            rl.question('Enter the unit to convert to (miles/kilometers/meters/feet): ', (toUnit) => {
                // Create a conversion request object
                const request = new ConversionRequest(value, fromUnit, toUnit);
                
                // Use the object for conversion
                const result = convert(request);
                
                // Show the result and the object for learning purposes
                console.log('\nConversion Request Object:');
                console.log(request);
                console.log('\nResult:');
                console.log(result);
                console.log('------------------------');
                
                askForConversion();
            });
        });
    });
}

// Start the program
console.log("\nWelcome to the Distance Converter!");
console.log("(Type 'exit' when you want to quit)");
console.log("------------------------");
askForConversion();
