// const genBtn = document.getElementById('generate-btn');
// const sortBtn = document.getElementById('sort-btn');

// Return a random number between 1-100
const generateElement = () => {
    return Math.floor(Math.random() * 100 + 1);
}

// Return an array with 5 random numbers
const generateArray = () => {
    return Array.from({ length: 5}, () => generateElement());
}

// Create and return an empty div
const generateContainer = () => {
  return document.createElement('div');
}

function fillArrContainer(container, arr) {
    container.innerHTML = '';

    for (let i = 0; i < Math.min(5, arr.length); i++) {
        let span = document.createElement('span');
        span.textContent = arr[i];
        container.appendChild(span);
    }
}

// Return a boolean indicating if the first integer is 
// less than or equal to the second
const isOrdered = (a, b) => {
    return (a <= b);
}

const swapElements = (arr, i) => {
    if (!isOrdered(arr[i], arr[i + 1])) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        return `${arr} indexes ${i} and ${i + 1} swapped`;
    } else {
        return `No elements swapped`;
    }
}

// const randomElement = generateElement();
// console.log(randomElement);

// const randomArray = generateArray();
// console.log(randomArray);

// const isOrderedTest = isOrderded(1, 2);
// console.log(isOrderedTest);

const testArr = [1, 2, 3, 4, 5];

const swapElementsTest = swapElements(testArr, 0);
console.log(swapElementsTest);