import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

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
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.fetchTodos();
  }


  addTodo(): void{
    if (!this.todoTitle.trim()){
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo => {
        console.log('todo', todo);
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }

  fetchTodos(): void {
    // RxJS
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe( todos => {
          // console.log('Response:', todos);
          this.todos = todos;
          this.loading = false;
        }
      );
  }

  deleteTodo(id: number): void {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(resp => {
        // console.log(resp);
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }
}
