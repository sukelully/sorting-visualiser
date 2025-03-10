const genBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');
const startingArray = document.getElementById('starting-array');
const arrayContainer = document.getElementById('array-container');

const testArr = [92, 3, 42, 69, 91];

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
    if (children[i + 1]) {
        children[i + 1].style.border = "dashed 2px red";
    } else {
        return;
    }
}

// Sort elements
const bubbleSortStep = (arr, container, i = 0, swapped = false) => {
    // Base case: return when array sorted
    if (i >= arr.length - 1) {
        if (!swapped) {
            const finalArray = generateContainer();
            fillArrContainer(finalArray, arr);
            finalArray.setAttribute('style', 'border: 4px solid darkgreen !important');
            arrayContainer.append(finalArray);
            return;
        }

        // Otherwise, start another full pass from the beginning
        return bubbleSortStep(arr, container, 0, false);
    }

    const currentStep = generateContainer();

    fillArrContainer(currentStep, arr);

    if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i);
        swapped = true;
    }


    highlightCurrentEls(currentStep, i);
    arrayContainer.append(currentStep);

    // Move to the next pair
    bubbleSortStep(arr, container, i + 1, swapped);
}


genBtn.addEventListener('click', () => {
    startingArray.innerHTML = "";

    fillArrContainer(startingArray, generateArray());
    // fillArrContainer(startingArray, testArr);
});

sortBtn.addEventListener('click', () => {
    const arr = Array.from(startingArray.children).map(el => Number(el.textContent));
    highlightCurrentEls(startingArray, 0);
    bubbleSortStep(arr, startingArray);
    // bubbleSortStep(testArr, startingArray);
});

// const randomElement = generateElement();
// console.log(randomElement);

// const randomArray = generateArray();
// console.log(randomArray);

// const isOrderedTest = isOrdered(1, 2);
// console.log(isOrderedTest);

// const testArr = [1, 2, 3, 4, 5];

// const swapElementsTest = swapElements(testArr, 0);
// console.log(swapElementsTest);
// 