const rotateBttn = document.querySelector("#rotateBttn");
const rotateIcon = document.querySelector("#rotateIcon")
const canvas = document.querySelector("#display");
let rotation = false;

function rotate() {
  if (rotation == true) {
    canvas.style.backgroundImage = "url('./assets/42404_360.gif')";
    rotateIcon.src = "./assets/close.svg"
  } else {
    canvas.style.backgroundImage = "url('./assets/42404.png')";
    rotateIcon.src = "./assets/360.svg"
  }
}

rotateBttn.addEventListener("click", () => {
  rotation ? rotation = false : rotation = true;

  rotate();
});