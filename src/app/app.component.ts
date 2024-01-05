import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { Observable } from 'rxjs';
import { TodoService } from './services/todo.service';
import { Todo } from './types/todo.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoComponentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  idToBeUpdated: number | undefined;
  todosResp$: Observable<any> | undefined;
  todos: Todo[] = [];
  todoInput: string | undefined = '';
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todosResp$ = this.todoService.getAllTodos();
    this.todosResp$.subscribe((resp) => (this.todos = resp.data));
  }
  hanleAddTodo() {
    if (!this.idToBeUpdated) {
      let todo = {
        title: this.todoInput,
      };
      this.todoService
        .createTodo(todo)
        .subscribe((resp: any) => this.todos.push(resp.data));
    } else {
      this.todoService
        .updateTodo(this.idToBeUpdated, {
          id: this.idToBeUpdated,
          title: this.todoInput,
        })
        .subscribe((resp: any) => {
          console.log(resp);
          if (resp.status) {
            this.loadTodos();
          }
        });
    }
    this.todoInput = '';
  }

  handleOnDelete(id: number) {
    this.todoService.deleteTodo(id).subscribe((resp: any) => {
      if (resp.status) {
        this.loadTodos();
      }
    });
  }
  handleOnEdit(id: number) {
    let todo: Todo | undefined = this.todos.find((todo) => (todo.id = id));
    this.todoInput = todo?.title;
    this.idToBeUpdated = todo?.id;
  }
  handleOnComplete(event: Todo) {
    const status = event.status === 'Completed' ? 'Pending' : 'Completed';
    this.todoService
      .updateTodo(event?.id, { id: event.id, status })
      .subscribe((_) => this.loadTodos());
  }
}
