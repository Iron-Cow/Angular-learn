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

  error = '';

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
    }).subscribe(
      todo => {
      // console.log('todo', todo);
      this.todos.push(todo);
      this.todoTitle = '';
    },
      error => {
        console.log('error', error);
      },
      () => {}
      );
  }

  fetchTodos(): void {
    // RxJS
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe( todos => {
          // console.log('Response:', todos);
          this.todos = todos;
          this.loading = false;
        },
      error => {
        console.log('error', error);
        this.error = error.message;
      },
      () => {}
      );
  }

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id)
      .subscribe(resp => {
        // console.log(resp);
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }

  completeTodo(id: any): void {
    this.todosService.completeTodo(id).subscribe(resp => {
      console.log(resp);
      this.todos.find(t => t.id === resp.id).completed = true;
    });
  }
}
