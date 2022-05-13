// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDesciptions = [];
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title,description) {
  const task = {
    titles: title,
    complete: false,
    desciptions: description,
    logTaskState: function() {
      console.log(`${task.titles} has${task.complete ? " " : " not "} been completed`);
    },
    taskComplete : function() {
      this.complete = true;
    }
  };
  return task;
}


const task1 = newTask('clean Cat Litter','Take all the 💩 out of the litter box"');
const task2 = newTask('Do Laundry',"😨");
task1.logTaskState();
task1.taskComplete();
task1.logTaskState();
task2.logTaskState();




