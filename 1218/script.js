'use strict';
// please do not delete the 'use strict' line above

document.getElementsByClassName("start-button").addEventListener('click',changeHuman())

function changeHuman() {
  document.getElementById("human").textContent = human[_.random(0,27)].name
}

console.log(human[_.random(0,26)].name)
console.log(document.getElementById("human"));
console.log(document.getElementsByClassName("start-button"))


