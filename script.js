//ESERCIZIO 1
const nameOfUser = document.getElementById("userName");
const saveBtn = document.getElementsByTagName("button")[0];
const removeBtn = document.getElementsByTagName("button")[1];
const form = document.getElementsByTagName("form")[0];
const cardText = document.getElementById("textCard");
const refreshBtn = document.getElementsByTagName("button")[2];

form.onsubmit = (e) => {
  e.preventDefault();
};

saveBtn.onclick = () => {
  const name = nameOfUser.value;
  localStorage.setItem("savedName", name);
};

removeBtn.addEventListener("click", () => {
  nameOfUser.value = "";
  localStorage.removeItem("savedName");
});

refreshBtn.addEventListener("click", () => {
  location.reload();
});

const storagedName = localStorage.getItem("savedName");
cardText.innerText = `previous UserName: ${storagedName}`;

//ESERCIZIO 2

const initializeTimer = () => {
  let counter = sessionStorage.getItem("counter");
  if (!counter) {
    counter = 0;
    sessionStorage.setItem("counter", counter);
  }
  return parseInt(counter);
};

const updateCounter = () => {
  let counter = initializeTimer();
  counter++;
  sessionStorage.setItem("counter", counter);
  document.getElementById("counterDisplay").innerText = counter;
};

const startCounter = () => {
  updateCounter(); //
  setInterval(updateCounter, 1000);
};

window.onload = startCounter;
