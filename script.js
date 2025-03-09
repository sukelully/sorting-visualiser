// const genBtn = document.getElementById('generate-btn');
// const sortBtn = document.getElementById('sort-btn');

const generateElement = () => {
    return Math.floor(Math.random() * 100 + 1);
}

const generateArray = () => {
    return Array.from({ length: 5}, () => generateElement());
}

const randomElement = generateElement();
console.log(randomElement);

const randomArray = generateArray();
console.log(randomArray);