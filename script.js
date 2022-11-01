const addForm = document.querySelector(".todo-list");
const list = document.querySelector(".todos");
const buttonClear = document.querySelector(".clear-list-button");

addForm.addEventListener("submit", (e) => {
  e.preventDefault(); //
  const todo = addForm.add.value.trim();

  if (todo.length != 0) {
    generateTemplate(todo);
    addForm.reset();
  } else {
    alert("Please input task");
  }
});

const generateTemplate = (todo) => {
  list.insertAdjacentHTML(
    "afterbegin",
    `<li class="list-group-item">
      <span>${todo}</span>
      <i class="check"></i>
      <i class="delete"></i>
    </li>`
  );
};

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

buttonClear.addEventListener("click", () => {
  list.replaceChildren();
});

/* list.addEventListener("click", (e) => {
  if (e.target.classList.contains("check")) {
    let nav__links = document.querySelectorAll(".nav__link");
    nav__links.classList.toggle("active");
  }
}); */
