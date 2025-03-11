const genBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');
const startingArray = document.getElementById('starting-array');
const arrayContainer = document.getElementById('array-container');

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

// Fill an HTML element with provided array values
const fillArrContainer = (container, arr) => {
    container.innerHTML = '';

    for (const num of arr) {
        const span = document.createElement('span');
        span.textContent = num;
        container.appendChild(span);
    }
}

// Return a boolean indicating if the first integer is 
// less than or equal to the second
const isOrdered = (a, b) => a <= b;

// Swap two sequential elements in an array if the first is larger than the second
const swapElements = (arr, i) => {
    if (!isOrdered(arr[i], arr[i + 1])) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
}

// Set a border on two elements being compared
const highlightCurrentEls = (el, i) => {
    const children = Array.from(el.children);

    children[i].style.border = "dashed 2px red";
    children[i + 1].style.border = "dashed 2px red";
}

// Recursively sort an array
const bubbleSortStep = (arr, i = 0, swapped = false) => {
    if (i >= arr.length - 1) {
        // Base case, array sorted
        if (!swapped) {
            return;
        }

        // Otherwise start new pass
        bubbleSortStep(arr, 0, false);
        return;
    }

    // List of array div elements currently within #array-container
    const divList = Array.from(arrayContainer.children);
    const arrList = [];

    // Get the most recent iteration (div array of span elements)
    // Extract values of span elements within in divs to array
    for (const div of divList) {
        const arrVal = Array.from(div.children).map(span => Number(span.textContent));
        arrList.push(arrVal);
    }

    // Highlight current comparison pair
    highlightCurrentEls(divList[count], i);

    // Swap elements if applicable
    if (!isOrdered(arrList[count][i], arrList[count][i + 1])) {
        swapElements(arrList[count], i);
        swapped = true;
    }

    // Fill new container with swapped array values and add to list of iterations
    const nextContainer = generateContainer();
    fillArrContainer(nextContainer, arrList[count]);
    arrayContainer.appendChild(nextContainer);

    // Move on to next comparison pair
    bubbleSortStep(arrList[count++], i + 1, swapped);
    return;
}

// Adds a green border to the final, sorted array div element
const highlightFinalArray = () => {
    const finalArray = Array.from(arrayContainer.children).pop();
    finalArray.style.border = "4px solid darkgreen";
}

genBtn.addEventListener('click', () => {
    count = 0;

    const arrayList = Array.from(arrayContainer.children);
    startingArray.innerHTML = "";

    // Reset #array-container if sorting has already occurred
    if (arrayList.length > 1) {
        arrayContainer.innerHTML = "";
        const newStartingArray = generateContainer();
        newStartingArray.id = 'starting-array';
        arrayContainer.append(startingArray);
        fillArrContainer(startingArray, generateArray());
    }

    fillArrContainer(startingArray, generateArray());
    sortBtn.style.display = 'block';
});

sortBtn.addEventListener('click', () => {
    const arr = Array.from(startingArray.children).map(el => Number(el.textContent));

    bubbleSortStep(arr);
    highlightFinalArray();
    sortBtn.style.display = 'none';
});