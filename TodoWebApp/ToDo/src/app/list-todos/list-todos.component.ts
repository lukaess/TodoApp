import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../services/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  message: string | undefined;

  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshTodoList();
  }

  refreshTodoList() {
    this.todoService.getTodos('admin').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(id: any) {
    console.log(id);
    this.todoService.deleteTodo('admin', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} was Successful!`
        this.refreshTodoList();
      }
    )
  }

  updateTodo(id: any) {
    console.log(id);    
    this.router.navigate(['todos', id]);
  }

  addTodo() {   
    this.router.navigate(['todos', -1]);
  }

}
