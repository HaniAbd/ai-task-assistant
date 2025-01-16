import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class TaskInputComponent {
  title: string = '';
  description: string = '';
  priority: string = '';
  dueDate: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    const newTask = {
      title: this.title,
      description: this.description,
      priority: this.priority,
      dueDate: this.dueDate,
    };
    this.taskService.addTask(newTask).subscribe();
  }
}
