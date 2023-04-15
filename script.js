let min = 0;
let sec = 0;
let interval = null;
let timerName = null;

let data = [];

const minElement = document.querySelector(".min");
const secElement = document.querySelector(".sec");
const btnStart = document.querySelector(".btn-start");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");
const btnSave = document.querySelector(".save");
const table = document.querySelector("table");

const reset = () => {
  clearInterval(interval);
  interval = null;
  minElement.textContent = "00";
  secElement.textContent = "00";
  min = 0;
  sec = 0;
};

const start = () => {
  if (interval !== null) return;
  timerName = prompt("Enter Timer/Person Name ");

  if (timerName == null || timerName.trim() == "") return;
  interval = setInterval(() => {
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    minElement.textContent = min.toString().padStart(2, "0");
    secElement.textContent = sec.toString().padStart(2, "0");
  }, 1000);
};

const pause = () => {
  clearInterval(interval);
  interval = null;
};

btnStart.addEventListener("click", start);

btnPause.addEventListener("click", pause);

btnReset.addEventListener("click", reset);

btnSave.addEventListener("click", () => {
  if (interval == null) return;

  table.insertAdjacentHTML(
    "beforeend",
    `<tr>
        <td>${timerName}</td>
        <td>${minElement.textContent}:${secElement.textContent}</td>
    <tr>`
  );

  reset();
});
