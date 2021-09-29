import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  getTodos(username: any){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username: string, id: any){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  getTodo(username: string, id: any){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username: string, id: any, todo: Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

  addTodo(username: string, todo: Todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos/`, todo);
  }
}
