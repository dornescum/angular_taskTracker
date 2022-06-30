import { Component, OnInit } from '@angular/core';
import {UiService} from "src/app/services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'task tracker';
  showAddTask!:boolean;
  subscription!: Subscription;

  constructor(private uiService:UiService) {
    // in uiService am  proprietatea asta (diferita dar cu acc nume) this.showAddTask = !this.showAddTask;
    this.subscription=  this.uiService.onToggle().subscribe(value=>this.showAddTask =value)
  }

  ngOnInit(): void {
  }
  toggleAddTask(){
    // console.log('test')
    this.uiService.toggleAddTask()
  }

}
