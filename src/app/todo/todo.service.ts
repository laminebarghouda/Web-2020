import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  addTodo(name: string, content: string): Todo[]{
    const lastId = this.todos[this.todos.length - 1].id;
    const newTodo = new Todo(lastId + 1, name, content);
    this.todos.push(newTodo);
    return this.todos;
  }

  getTodos(): Todo[]{
    return this.todos;
  }

  deleteTodo(id: number): Todo[]{
    return this.todos;
  }

  constructor() { }
}
