import {Component} from '@angular/core';
import {TodoListComponent} from "./todo/todo-list.component";
import {Todo} from "./todo/todo";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent]
})
export class AppComponent {
    title: string;
    todos: Todo[];

    constructor(){
        this.title = "Angular 2do";
        this.todos = [

        ];
    }

    addTodo(title: string){
        this.todos.push(new Todo(title));
    }
}
