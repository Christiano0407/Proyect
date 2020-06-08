/* const container = document.getElementById(`container`);
const text = document.getElementById(`text`);

const totalTime = 7500;
const breatheTime = (totalTine / 5 )* 2;
const holdTime = totalTine / 5;

breathAnimation();
function breathAnimation(){
    text.innerText = `Breath In`;
    container.className = `container grow`;

    setTimeout(() => {
        text.innerText = "Hold";

        setTimeout(() => {
        text.innerText = `Breath Out`;
        container.className = `container shrink`;
        }, holdTime);
    }, breatheTime);
}
setInterval(breathAnimation, totalTimne) */

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);