import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoComponentComponent } from './todo-component/todo-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoComponentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';
  indexTobeUpdated: number | undefined;
  todos: string[] = [
    'Go to gym',
    'Make Bread',
    'a',
    'b',
    'c',
    'Go to gym',
    'Make Bread',
    'a',
    'b',
    'c',
    'Go to gym',
    'Make Bread',
    'a',
    'b',
    'c',
  ];
  todoInput: string = '';
  hanleAddTodo() {
    if (this.todoInput) {
      if (this.indexTobeUpdated !== undefined) {
        this.todos[this.indexTobeUpdated] = this.todoInput;
        this.indexTobeUpdated = undefined;
      } else {
        this.todos.push(this.todoInput);
      }
      this.todoInput = '';
    }
  }
  handleOnDelete(index: number) {
    this.todos.splice(index, 1);
  }
  handleOnEdit(index: number) {
    this.indexTobeUpdated = index;
    this.todoInput = this.todos[index];
  }
}
