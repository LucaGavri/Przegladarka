const btn = document.querySelector('.btn');
const evenList = document.querySelector('.main__columns__left__evenList');
const oddList = document.querySelector('.main__columns__right__oddList');

let arrTwenty = [];
let arrOdd = [];
let arrEven = [];

//random numbers from 1 to 100
function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//20 random numbers to array
function numbersToArr() {
    for (let i=0; i<20; i++){
    let myNums = getRandomNumbers(1,100);
    console.log(myNums);
    arrTwenty.push(myNums);
}}

//even numbers from array of 20 to new array
function evenNumbers(num) {
    if (num % 2 === 0) {
        arrEven.push(num);
    }
}


//odd numbers from array of 20 to new array
function oddNumbers(num) {
    if (num % 2 === 1) {
        arrOdd.push(num);
    }
}

//create li elems with even numbers
function evenNumbersToList(num){
    let li = document.createElement('li');
    li.textContent = num;
    evenList.appendChild(li);
}

//create li elems with odd numbers
function oddNumbersToList(num){
    let li = document.createElement('li');
    li.textContent = num;
    oddList.appendChild(li);
}

//btn onClick event
btn.addEventListener('click', function (e){
    e.preventDefault();
    arrTwenty = [];
    arrEven = [];
    arrOdd = [];
    evenList.innerHTML = null;
    oddList.innerHTML = null;
    numbersToArr();
    arrTwenty.forEach(evenNumbers);
    arrEven = arrEven.sort(function (a, b) {  return a - b;  });
    arrEven.map(evenNumbersToList);
    arrTwenty.forEach(oddNumbers);
    arrOdd = arrOdd.sort(function (a, b) {  return a - b;  });
    arrOdd.map(oddNumbersToList);
})
