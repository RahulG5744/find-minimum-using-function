// Function to find the minimum value in an array

function findMin(arr) {
    return Math.min(...arr);
}

const numbers = [45, 12, 89, 3, 67, 22];

const minValue = findMin(numbers);

console.log("Numbers:", numbers);
console.log("Minimum Value:", minValue);
