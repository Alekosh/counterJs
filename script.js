const minus = document.querySelector('#minus');
const reset = document.querySelector('#reset');
const plus = document.querySelector('#plus');
const counter = document.querySelector('#counter');

let i = 0;

minus.addEventListener('click', function () {
  i--;
  // i = (i < 10) ? "0" + i : i;
  if (i < 0) {
    i = 0;
  }
  counter.innerHTML = i;
});

plus.addEventListener('click', function () {
  i++;
  //i = (i < 10) ? "0" + i : i;
  counter.innerHTML = i;
})
reset.addEventListener('click', function () {
  i = 0;
  counter.innerHTML = i;
})
