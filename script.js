const genBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');
const startingArray = document.getElementById('starting-array');
const arrayContainer = document.getElementById('array-container');

const testArr = [76, 9, 9, 61, 66];
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
    // Paramters: arr, i = 0, swapped = false
    /* 
    - Base case: array is sorted [x]
    - Else Restart sort algorithm [x]
    - Highlight current elements
    - Swap them
    - Create container
    - Fill container with new arr
    - Append arr to #array-container
    - Start the algorithm at the next index
    - 
    */
//    console.log(arr.length);
    console.log(swapped);
    if (i >= arr.length - 1) {
        // Base case, array sorted
        if (!swapped) {
            console.log('End of array and swapped = false')
            return;
        }

        if (count >= 10) {
            console.log(`count has it 10`)
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
    if (!isOrdered(arrList[count][i], arrList[count][i + 1])) {
        swapElements(arrList[count], i);
        swapped = true;
    }

    const nextContainer = generateContainer();
    fillArrContainer(nextContainer, arrList[count]);
    arrayContainer.append(nextContainer);
    // ++count;
    // console.log(count);
    // console.log(arrList[0]);
    bubbleSortStep(arrList[count++], i + 1, swapped);
    return;
}

genBtn.addEventListener('click', () => {
    startingArray.innerHTML = "";

    // fillArrContainer(startingArray, generateArray());
    fillArrContainer(startingArray, testArr);
});

sortBtn.addEventListener('click', () => {
    const arr = Array.from(startingArray.children).map(el => Number(el.textContent));
    bubbleSortCount = 0;
    // console.log(arr);
    // bubbleSortStep(arr, startingArray);
    bubbleSortStep(testArr);
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