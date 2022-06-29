import { Component, OnInit } from '@angular/core';
import {TaskService} from "src/app/services/task.service";
import {TASKS} from "src/app/mock-tasks";
import {Task} from "src/app/Task";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // un array de task
  // tasks: Task[] =TASKS;
  tasks: Task[] =[]; // am mutat functionalitatea in service

  // si acum o cer in constuctor
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks()
     this.taskService.getTasks().subscribe((tasks)=>this.tasks =tasks)
  }

  deleteTask(task:Task){
    // console.log('delete')
    // filtrez t care nu are id ul task.id
    this.taskService.deleteTask(task).subscribe(()=> this.tasks = this.tasks.filter((t)=> t.id !== task.id))
  }
  toggleReminder(task:Task){
    // console.log(task.reminder)
    task.reminder = !task.reminder;
    // nu am nevoie de alt argument decat task
    this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task:Task){
    console.log(task);
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
  }
}
