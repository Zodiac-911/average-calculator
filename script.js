const messageElement = document.getElementById("message");
const inputElement = document.getElementById("note");
const addButtonElement = document.getElementById("submit");
const getAverageButton = document.getElementById("result");
const resultElement = document.getElementById("mou3adel");
const isPassedElement = document.getElementById("isPassed");
const resetButton = document.getElementById("reset");
const NotesContainerElement = document.getElementById("notes");
const themeButton = document.getElementById("theme-button");
const themes = [
  "theme-purple",
  "theme-blue",
  "theme-red",
  "theme-dark",
  "theme-light",
];
let currentTheme = 0;
let notes = [];
changeThem();
updateButtons();
inputElement.addEventListener("input", (e) => {
  updateButtons();
});
addButtonElement.addEventListener("click", () => {
  if (inputElement.value == "") return;
  notes.push(Number(inputElement.value));
  NotesContainerElement.innerHTML += `<p class="note-container">Note #${
    notes.length
  } : <span class="note">${
    notes[notes.length - 1] < 10
      ? "0" + notes[notes.length - 1].toFixed(2)
      : notes[notes.length - 1].toFixed(2)
  }</span></p>`;
  inputElement.value = "";
  messageElement.innerText = "Enter note " + (notes.length + 1).toString();
  updateButtons();
});

getAverageButton.addEventListener("click", () => {
  if (notes.length == 0) return;
  getAverage();
});
resetButton.addEventListener("click", () => {
  notes = [];
  inputElement.value = "";
  messageElement.innerText = "Enter note 1";
  resultElement.innerText = "";
  isPassedElement.innerText = "";
  NotesContainerElement.innerHTML = '<p class="title">Notes</p>';
  updateButtons();
});
function getAverage() {
  let total = 0;
  for (let i = 0; i < notes.length; i++) {
    total += notes[i];
  }
  avrage = total / notes.length;
  resultElement.innerText = avrage.toFixed(2);
  isPassedElement.innerText = getIsPassed(avrage);
}
function getIsPassed(avrage) {
  if (avrage >= 10) {
    return "Passed!";
  } else {
    return "Failed!";
  }
}

function updateButtons() {
  addButtonElement.disabled = inputElement.value === "";
  getAverageButton.disabled = notes.length <= 1;
  resetButton.disabled = !(notes.length > 0 || inputElement.value.length > 0);
}
function changeThem() {
  document.body.className = themes[currentTheme];
}
themeButton.addEventListener("click", () => {
  currentTheme++;
  if (currentTheme >= themes.length) {
    currentTheme = 0;
  }
  changeThem();
});
