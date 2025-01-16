import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    // this.taskService.getTasks().subscribe((tasks: any) => {
    //   this.tasks = tasks;
    // });
  }
}
