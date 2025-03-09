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
const isOrderded = (a, b) => {
    return (a <= b);
}

const swapElements = (arr, index) => {
    for (let i = 0; i < arr.length; i++) {
        if (isOrderded(arr[i], arr[i+1])) {
            console.log('test');
        }
    }
}

// const randomElement = generateElement();
// console.log(randomElement);

const randomArray = generateArray();
// console.log(randomArray);

// const isOrderedTest = isOrderded(1, 2);
// console.log(isOrderedTest);

const swapElementsTest = swapElements()