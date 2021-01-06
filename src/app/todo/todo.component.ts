import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  constructor(private todoService: TodoService) {
    this.todos = todoService.getTodos();
  }

  ngOnInit(): void {
  }

  addTodo(): void{
    this.todos = this.todoService.addTodo('Hello', 'Lamine');
  }

  deleteTodo(id: number): void{
    this.todos =  this.todoService.deleteTodo(id);
  }

}
