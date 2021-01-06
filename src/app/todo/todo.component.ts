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
  test = '';
  constructor(private todoService: TodoService) {
    this.todos = todoService.getTodos();
  }

  ngOnInit(): void {
  }

  addTodo(name: string, content: string): void{
    this.todos = this.todoService.addTodo(name, content);
  }

  deleteTodo(id: number): void{
    this.todos =  this.todoService.deleteTodo(id);
  }

}
