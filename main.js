const player = document.querySelector(`.player`);

let mgtop = 0;
let mgleft = 0;
let step = 30;

//move player right
function toRight() {
  mgleft += step;
}
//move player left
function toLeft() {
  mgleft -= step;
}
//move player top
function toTop() {
  mgtop -= step;
}
//move player bottom
function toBottom() {
  mgtop += step;
}

function movePlayer() {
  player.style.marginTop = mgtop + `px`;
  player.style.marginLeft = mgleft + `px`;
}

document.addEventListener(`keydown`, (event) => {
  console.log(event.code);

  if (event.code === `KeyN`) {
    toTop();
  } else if (event.code === `KeyD`) {
    toRight();
  } else if (event.code === `KeyA`) {
    toLeft();
  } else if (event.code === `KeyS`) {
    toBottom();
  }

  movePlayer();
});
