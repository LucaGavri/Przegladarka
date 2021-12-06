let arrTwenty = [];
const btn = document.querySelector('.btn');

function getRandomNums(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numsToArr() {
    for (let i=0; i<20; i++){
    let myNums = getRandomNums(1,100);
    console.log(myNums);
    arrTwenty.push(myNums);
}}

btn.addEventListener('click', function (e){
    e.preventDefault();
    arrTwenty = [];
    numsToArr();
    console.log(arrTwenty);
})
