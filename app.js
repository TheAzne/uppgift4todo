//Variabel
let completedCount = 0;

//HTML-Element. Hämtar från index.html.
const input = document.querySelector("input");
const btn = document.querySelector("button");
const lista = document.querySelector("ul");
const warning = document.querySelector("#warning");
const label = document.querySelector("p");
const array = [];

//Vad som händer när vi klickar "ok"
btn.addEventListener("click", addToDo, false);

function addToDo() {
  //Hämta text från input
  const text = input.value;

  //pusha array
  array.push(text);

  //Om man inte skriver något och bara trycker "ok", så ska man få ett meddelande
  if (text.length == 0) {
    warning.innerText = "Input must not be empty";
    warning.classList.add("animateVisible");
    return;
  } else {
    warning.innerText = "";
    warning.classList.remove("animateVisible");
  }

  //Text läggs till i vår lista, allså "ul" lista.
  const item = document.createElement("li");
  lista.appendChild(item);

  const itemLabel = document.createElement("span");
  itemLabel.innerText = text;
  item.appendChild(itemLabel);

  const trashcan = document.createElement("span");
  trashcan.innerHTML = "&#128465";
  trashcan.setAttribute("class", "trashcan");
  item.appendChild(trashcan);

  // Det vi har lagt till kan man markera "klar" eller "inte klar" samt en räknare hur som är klar
  itemLabel.addEventListener(
    "click",
    function () {
      if (item.getAttribute("class") == "klara") {
        item.setAttribute("class", "");
        completedCount--;
      } else {
        item.setAttribute("class", "klara");
        completedCount++;
      }

      label.innerText = ` ${completedCount} completed `;
    },
    false
  );

  // Klickbar trashcan
  trashcan.addEventListener("click", function () {
    item.remove();
  });

  //Nollställ input
  input.value = "";
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addToDo();
  }
});

console.log(array);
