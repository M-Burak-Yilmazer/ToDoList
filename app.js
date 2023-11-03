const inputVal = document.querySelector("#inputArea");
const addButton = document.querySelector("#addBtn");
const removeButton = document.querySelector("#removeBtn");
const mainList = document.getElementById("list");
const listArray = [];

addButton.addEventListener("click", (e) => {
  if (!(inputVal.value.trim() === "")) {
    if (!listArray.includes(inputVal.value)) {
      listArray.push(inputVal.value);
      const listPart = document.createElement("li");
      const text = document.createTextNode(inputVal.value.toUpperCase());
      listPart.appendChild(text);
      mainList.appendChild(listPart);
      inputVal.value = "";
      inputVal.focus();
    }
  }
});

inputVal.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});

removeButton.addEventListener("click", (e) => {
  listArray.pop();
  mainList.removeChild(mainList.lastElementChild);
});
inputVal.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    if (inputVal.value.trim() === "") {
      removeButton.click();
    }
  }
});
