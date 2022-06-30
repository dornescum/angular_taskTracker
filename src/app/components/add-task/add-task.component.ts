import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from "src/app/Task";
import {UiService} from "src/app/services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task', templateUrl: './add-task.component.html', styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public text!: string;
  public day!: string;
  public reminder!: boolean;
  @Output() onAddTask: EventEmitter<Task>= new EventEmitter<Task>();
  showAddTask!:boolean;
  subscription!: Subscription;


  // constructor(day: string, text: string, reminder: boolean) {
  constructor(private uiService:UiService) {
    // this.day = day;
    // this.text = text;
    // this.reminder = reminder;
    this.subscription=  this.uiService.onToggle().subscribe(value=>this.showAddTask =value)
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
