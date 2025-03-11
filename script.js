const genBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');
const startingArray = document.getElementById('starting-array');
const arrayContainer = document.getElementById('array-container');

const testArr = [76, 18, 54, 40, 13];
let count = 0;

// Return a random number between 1-100
const generateElement = () => {
    return Math.floor(Math.random() * 100 + 1);
}

// Return an array with 5 random numbers
const generateArray = () => {
    return Array.from({ length: 5 }, () => generateElement());
}

// Create and return an empty div
const generateContainer = () => {
    return document.createElement('div');
}

// Display array values in the DOM
const fillArrContainer = (container, arr) => {
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

// Swaps two sequential elements in an array if the first is larger than the second
const swapElements = (arr, i) => {
    if (!isOrdered(arr[i], arr[i + 1])) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
}

// Sets a border on the selected elements
const highlightCurrentEls = (el, i) => {
    const children = Array.from(el.children);

    children[i].style.border = "dashed 2px red";
    children[i + 1].style.border = "dashed 2px red";
}

const bubbleSortStep = (arr, i = 0, swapped = false) => {
    if (i >= arr.length - 1) {
        // Base case, array sorted
        if (!swapped) {
            console.log('End of array and swapped = false')
            return;
        }

        // Otherwise start new pass
        bubbleSortStep(arr, 0, false);
        return;
    }

    const divList = Array.from(arrayContainer.children);
    const arrList = [];

    // Get the most recent iteration (div array of span elements)
    // Highlight current comparison and extract span values to array
    for (const div of divList) {
        const arrVal = Array.from(div.children).map(span => Number(span.textContent));
        arrList.push(arrVal);
    }

    highlightCurrentEls(divList[count], i);

    // Swap elements
    if (!isOrdered(arrList[count][i], arrList[count][i + 1])) {
        swapElements(arrList[count], i);
        swapped = true;
    }

    // Fill new container with swapped array values and add to list of iterations
    const nextContainer = generateContainer();
    fillArrContainer(nextContainer, arrList[count]);
    arrayContainer.append(nextContainer);

    bubbleSortStep(arrList[count++], i + 1, swapped);
    return;
}

const highlightFinalArray = () => {
    const finalArray = Array.from(arrayContainer.children).pop();
    finalArray.style.border = "4px solid darkgreen";
}

genBtn.addEventListener('click', () => {
    startingArray.innerHTML = "";

    // fillArrContainer(startingArray, generateArray());
    fillArrContainer(startingArray, testArr);
});

sortBtn.addEventListener('click', () => {
    const arr = Array.from(startingArray.children).map(el => Number(el.textContent));
    bubbleSortStep(arr);
    highlightFinalArray();
});