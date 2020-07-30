import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, delay, map, tap} from "rxjs/operators";

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class TodosService {
  constructor(
    private http: HttpClient
  ){}

  addTodo(todo: Todo): Observable<Todo>{
    const headers = new HttpHeaders({
        'MyCustomHeader': Math.random().toString(),
        "ololi": 'asdf'
      });
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      headers
    });
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'anyany');


    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      params,
      observe: "response"
    })
      .pipe(
        map(response => {
          console.log("Response", response);
          return response.body;
        }),
        delay(500),
        catchError(error => {
          console.log('Error', error.message);
          return throwError(error);
        })
      );
  }

  deleteTodo(id: number): Observable<any>{
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        observe: 'events'
      }).pipe(
        tap(event => {
          if (event.type === HttpEventType.Sent)
          {console.log('send', event);
          }

          if (event.type === HttpEventType.Response)
          {console.log('response', event);
          }
        })
    );
  }

  completeTodo(id: number): Observable<Todo>{
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    },
      {
        // responseType: "text"
        responseType: "json"
      });
  }

}




