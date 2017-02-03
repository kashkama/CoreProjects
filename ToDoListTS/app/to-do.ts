/// <reference path="to-do-classes-interfaces.ts"/>
var tasks=[];
tasks.push(new ToDoList.Task("do laundry","high"));
tasks[0].markDone();

// var HobbyTasks=[];
// HobbyTasks.push(new ToDoList.HobbyTask("take 4 laps","high"));
// HobbyTasks[1].makeDone();
console.log(tasks);
