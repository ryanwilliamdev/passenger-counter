// document.getElementById("count").innerText = 5

// let count = 5;
// count = count + 1;
// console.log(count);



// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in index.html

let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    countEl.innerText = count++;
}

