import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";
import {Todo, TodosService} from "./todos.services";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  todos: Todo[] = [];

  todoTitle = '';

  loading = false;

  constructor(
    private todosService: TodosService
  ){}

  ngOnInit(): void {
    this.fetchTodos();
  }


  addTodo(): void{
    if (!this.todoTitle.trim()){
      return;
    }

    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false
    }).subscribe(todo => {
      // console.log('todo', todo);
      this.todos.push(todo);
      this.todoTitle = '';
    });
  }

  fetchTodos(): void {
    // RxJS
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe( todos => {
          // console.log('Response:', todos);
          this.todos = todos;
          this.loading = false;
        }
      );
  }

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id)
      .subscribe(resp => {
        // console.log(resp);
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }
}
