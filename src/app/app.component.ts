import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Decorator
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // States
  tasks: string[] = [];
  taskInput: string = '';

  // Lifecycle
  ngOnInit(){
    const existingTasks = localStorage.getItem('todos');
    this.tasks = JSON.parse(existingTasks as string) || [];
  }

  addTask(){
    this.tasks.push(this.taskInput); // Changing states
    localStorage.setItem('todos',JSON.stringify(this.tasks));
  }

}
