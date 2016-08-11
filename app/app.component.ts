import {Component} from '@angular/core';
import {TodoListComponent} from "./todo/todo-list.component";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent]
})
export class AppComponent {
    title: string;
    todos: string[];

    constructor(){
        this.title = "Angular 2do";
        this.todos = [

        ];
    }

    addTodo(title: string){
        this.todos.push(title);
    }
}
