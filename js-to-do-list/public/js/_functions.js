let taskFunction = (input, ul) => {
  // ADDING A TASK ---------
  // li
  let li = document.createElement("li");
  li.innerText = input.value;
  ul.appendChild(li);
  li.classList.add("todo");
  li.classList.add("all");
  input.value = "";
  // span
  let span = document.createElement("span");
  li.appendChild(span);
  // icon 1
  let icon1 = document.createElement("i");
  span.appendChild(icon1);
  icon1.classList.add("fas");
  icon1.classList.add("fa-edit");
  // icon 2
  let icon2 = document.createElement("i");
  span.appendChild(icon2);
  icon2.classList.add("fas");
  icon2.classList.add("fa-trash");
  // icon3
  let icon3 = document.createElement("i");
  span.prepend(icon3);
  icon3.classList.add("far");
  icon3.classList.add("fa-check-square");
  //MODIFYING A TASK ---------
  icon1.addEventListener("click", () => {
    li.setAttribute("contenteditable", "true");
  });
  // ENTER
  li.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      li.setAttribute("contenteditable", "false");
    }
  });
  // DELETING A TASK ---------
  icon2.addEventListener("click", () => {
    li.remove();
  });
  // FINISHED TASK ---------
  icon3.addEventListener("click", () => {
    icon3.classList.remove("far");
    icon3.classList.add("fas");
    icon3.classList.add("fa-check-square");
    li.classList.toggle("checked");
    li.classList.remove("todo");
  });
};

export { taskFunction };
