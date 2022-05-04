const form = document.getElementById("my-form");
const title = document.getElementById("title");
const allLists = document.getElementById("all-lists");

let list = [
  {
    title: "Create Navbar",
    done: false,
  },
  {
    title: "Create Gallery Page",
    done: false,
  },
];

const deleteTask = (inputIndex) => {
  list = list.filter((task, taskIndex) => taskIndex != inputIndex);
  updateUI();
};

const taskSelected = (inputIndex) => {
  list = list.map((task, taskIndex) =>
    taskIndex == inputIndex ? { ...task, done: !task.done } : task
  );
  updateUI();
};

const updateUI = () => {
  allLists.innerHTML = list
    .map(
      (task, index) =>
        `<li ${task.done && `class="done"`} onClick="taskSelected(${index})">
            <span>${task.title}</span>
            <span><button onClick="deleteTask(${index})">x</button></span>
        </li>`
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (title.value.trim() === "") {
    alert("Title is empty.");
  } else {
    list.push({
      title: title.value.trim(),
      done: false,
    });
    title.value = "";
    updateUI();
  }
});

updateUI();
