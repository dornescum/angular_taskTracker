import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "src/app/Task";
import {TaskService} from "src/app/services/task.service";
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  // un input care il primeste din tasks mai exact [task]
  @Input() task!: Task;
  // faTimes = faTimes;
  // trimit in afara o functie prin onDeleteTask() catre tasks component
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:any){
    // console.log(task)
    this.onDeleteTask.emit(task);
  }
  onToggle(task:Task){
    // ca si la onDelete trimit catre parinte onToggleReminder
    this.onToggleReminder.emit(task);
  }
}
