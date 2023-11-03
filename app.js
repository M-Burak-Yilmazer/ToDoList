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

const time = document.querySelector("#time");
const setTime = () => {
  time.innerHTML = `${new Date().toLocaleString()}`;

  const changecolor = () => {
    const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let renk = "#";
    for (let i = 0; i < 6; i++) {
      renk += color[Math.floor(Math.random() * color.length)];
    }
    return renk;
  };
  time.style.color = `${changecolor()}`;
};
setInterval(setTime, 1000);
