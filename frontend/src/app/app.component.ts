import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskInputComponent } from './components/task-input/task-input.component';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent, TaskInputComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
