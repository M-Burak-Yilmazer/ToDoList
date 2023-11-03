const inputVal = document.querySelector("#inputArea");
const addButton = document.querySelector("#addBtn");
const removeButton = document.querySelector("#removeBtn");
const mainList = document.getElementById("list");
const listArray = [];

addButton.addEventListener("click", (e) => {
  if (!listArray.includes(inputVal.value)) {
    listArray.push(inputVal.value);
    const listPart = document.createElement("li");
    const text = document.createTextNode(inputVal.value);
    listPart.appendChild(text);
    mainList.appendChild(listPart);
  }
});
