class TodoApp {
  constructor(TaskInputField, TaskAddButton) {
    this.PendingTasks = [];
    this.CompletedTasks = [];
    this.TaskInputField = TaskInputField;
    this.TaskAddButton = TaskAddButton;
    this.AddTaskmd();
  }

  AddTaskmd() {
    this.TaskAddButton.addEventListener("click", () => {
      let PendingTaskText = this.TaskInputField.value.trim();

      if (PendingTaskText !== "") {
        this.PendingTasks.push(PendingTaskText);
        this.TaskInputField.value = "";

        this.UpdateUI();
      } else {
        alert("please input a task ");
      }
    });
  }

  UpdateUI() {
    let PendingTaskList = document.getElementById("pendingtasks");
    PendingTaskList.innerHTML = "";

    this.PendingTasks.forEach((task) => {
      let TaskItem = document.createElement("li");
      TaskItem.innerText = task;

      let TaskDeleteButton = document.createElement("button");
      TaskDeleteButton.textContent = "Delete Task";

      TaskDeleteButton.addEventListener("click", () => {
        let index = this.PendingTasks.indexOf(task);
        this.DeletePendingTask(index);
      });

      let MarkAsDoneButton = document.createElement("button");
      MarkAsDoneButton.textContent = "Mark As Done";

      MarkAsDoneButton.addEventListener("click", () => {
        let index = this.PendingTasks.indexOf(task);
        this.MarkTaskAsDone(index);
      });

      TaskItem.appendChild(TaskDeleteButton);
      TaskItem.appendChild(MarkAsDoneButton);
      PendingTaskList.appendChild(TaskItem);
    });

    let CompletedTaskList = document.getElementById("completedtasks");
    CompletedTaskList.innerHTML = "";

    this.CompletedTasks.forEach((task) => {
      let CompletedTask = document.createElement("li");
      CompletedTask.innerText = task;
      CompletedTaskList.appendChild(CompletedTask);
    });
  }

  DeletePendingTask(index) {
    this.PendingTasks.splice(index, 1);
    this.UpdateUI();
  }

  MarkTaskAsDone(index) {
    let taskToMove = this.PendingTasks[index];
    this.PendingTasks.splice(index, 1);
    this.CompletedTasks.push(taskToMove);
    this.UpdateUI();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let TaskInputField = document.getElementById("taskinput");
  let TaskAddButton = document.getElementById("addtaskbtn");

  const todoApp = new TodoApp(TaskInputField, TaskAddButton);
});
