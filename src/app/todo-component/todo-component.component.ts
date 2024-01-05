import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../types/todo.type';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-component',
  standalone: true,
  imports: [],
  templateUrl: './todo-component.component.html',
  styleUrl: './todo-component.component.css',
})
export class TodoComponentComponent {
  constructor() {}
  @Input({ required: true })
  todo: Todo | undefined;

  @Output()
  OnDelete = new EventEmitter();
  @Output()
  OnEdit = new EventEmitter();
  @Output()
  onComplete = new EventEmitter();

  handleOnDeleteClicked() {
    this.OnDelete.emit(this.todo?.id);
  }
  handleOnEditClicked() {
    this.OnEdit.emit(this.todo?.id);
  }
  handleOnCheck() {
    this.onComplete.emit(this.todo);
  }
}
