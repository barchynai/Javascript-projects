const button = document.querySelector("button");
const counter = document.querySelector("#counter");
const btn = document.querySelector("#button");
const counterJuv = document.querySelector("#calc");
const manch_btn = document.querySelector("#manch_btn");
const counterManch = document.querySelector("#manch_counter");



let count = 0;
function clickButton() {
    count ++
    counter.innerHTML = count;
}
button.addEventListener("click", clickButton);

let count2 = 0;
function clickBtn() {
    count2 ++
    counterJuv.innerHTML = count2;
}
btn.addEventListener("click", clickBtn);

let count3 = 0;
function clickManch() {
    count3 ++
    counterManch.innerHTML = count3;
}
manch_btn.addEventListener("click", clickManch);

