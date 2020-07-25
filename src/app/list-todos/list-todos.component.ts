import { Component, OnInit } from '@angular/core'
import { TodoDataService } from '../services/data/todo-data.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos: Todo[]

  deleteMessage: String

  updateMessage: String

  errorMessage: String




  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos() {

    this.todoService.retrieveAllTodos('magma').subscribe(
      response => {
        this.todos = response
      }
    );
  }



  deleteTodo(id) {
    this.todoService.deleteTodo('magma', id).subscribe(
      response => {
        console.log(response)
        this.deleteMessage = `Delete of Todo ${id} Succesfull!`
        this.refreshTodos()
      },
      error => {
        console.error();

        this.errorMessage = `Delete of Todo ${id} Unsuccesful!`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id) {
    this.router.navigate([`todos`, id])

  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}

export class Todo {
  constructor(public id: number,
    public description: String,
    public done: boolean,
    public targetDate: Date) {

  }
}
