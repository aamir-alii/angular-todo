import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo, createTodo } from '../types/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  HOST: string = 'http://localhost:8080/api/v1';
  createTodo(todo: createTodo) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.HOST}/todos`, todo, {
      headers,
    });
  }
  getAllTodos() {
    return this.http.get(`${this.HOST}/todos`);
  }
  getSingleTodo(id: number) {
    return this.http.get(`${this.HOST}/todos/${id}`);
  }
  updateTodo(id: number, todo: Todo) {
    return this.http.patch(`${this.HOST}/todos?id=${id}`, todo);
  }
  deleteTodo(id: number) {
    return this.http.delete(`${this.HOST}/todos?id=${id}`);
  }
}
