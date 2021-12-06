const btn = document.querySelector('.btn');

let arrTwenty = [];
let arrOdd = [];
let arrEven = [];

function getRandomNums(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numsToArr() {
    for (let i=0; i<20; i++){
    let myNums = getRandomNums(1,100);
    console.log(myNums);
    arrTwenty.push(myNums);
}}

function evenNumbers(num) {
    if (num % 2 === 0) {
        arrEven.push(num);
    }
}
function oddNumbers(num) {
    if (num % 2 === 1) {
        arrOdd.push(num);
    }
}

btn.addEventListener('click', function (e){
    e.preventDefault();
    arrTwenty = [];
    numsToArr();
    console.log(arrTwenty);
    arrTwenty.forEach(evenNumbers)
    console.log(arrEven)
    arrTwenty.forEach(oddNumbers)
    console.log(arrOdd)
})
