import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from "src/app/Task";

@Component({
  selector: 'app-add-task', templateUrl: './add-task.component.html', styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public text!: string;
  public day!: string;
  public reminder!: boolean;
  @Output() onAddTask: EventEmitter<Task>= new EventEmitter<Task>();

  // constructor(day: string, text: string, reminder: boolean) {
  constructor() {
    // this.day = day;
    // this.text = text;
    // this.reminder = reminder;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('add a task')
    }
    const newTask = {
      text: this.text, day: this.day, reminder: this.reminder
    }
    // trimit catre parinte obiectul cu info
    this.onAddTask.emit(newTask);
    // =======
    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
