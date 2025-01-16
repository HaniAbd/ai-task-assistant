import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<any[]> {
    // Placeholder for actual API call
    return of([
      { title: 'Sample Task 1', priority: 'High', dueDate: '2025-01-20' },
      { title: 'Sample Task 2', priority: 'Low', dueDate: '2025-01-22' },
    ]);
  }

  addTask(task: any): Observable<any> {
    // Placeholder for actual API call
    console.log('Task added:', task);
    return of(task);
  }
}
