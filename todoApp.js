class TodoApp {
  constructor(TaskInputField, TaskAddButton) {
    this.PendingTasks = [];
    this.TaskInputField = TaskInputField;
    this.TaskAddButton = TaskAddButton;
  }

  AddTaskmd() {
    this.TaskAddButton.addEventListener("click", function () {
      let PendingTaskText = this.TaskInputField.trim();

      if (PendingTaskText === "") {
        this.PendingTasks.push(PendingTaskText);
        this.TaskInputField.value = "";
      } else {
        alert("please input a task ");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let TaskInputField = document.getElementById("taskinput");
  let TaskAddButton = document.getElementById("addtaskbtn");

  const todoApp = new TodoApp(TaskInputField, TaskAddButton);
});
