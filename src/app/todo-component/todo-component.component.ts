import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-component',
  standalone: true,
  imports: [],
  templateUrl: './todo-component.component.html',
  styleUrl: './todo-component.component.css',
})
export class TodoComponentComponent {
  @Input({ required: true })
  todo: string = '';
  @Input({ required: true })
  index: number | undefined;

  @Output()
  OnDelete = new EventEmitter();
  @Output()
  OnEdit = new EventEmitter();

  handleOnDeleteClicked() {
    this.OnDelete.emit(this.index);
  }
  handleOnEditClicked() {
    this.OnEdit.emit(this.index);
  }
}
