let value = document.querySelector(".data");

function increment() {
  let num = parseInt(value.innerHTML);
  num++;
  value.innerHTML = num;
}

function decrement() {
  let num = parseInt(value.innerHTML);
  num--;
  value.innerHTML = num;
}
