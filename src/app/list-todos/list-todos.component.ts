import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public desc: string,
    public targetDate: Date,
    public isCompleted: boolean
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos = [

    // { id: 1, desc:  },
    // { id: 2, desc: 'Learn Java' },
    // { id: 3, desc: 'Go North' }

    new Todo(1, 'Learn Angular', new Date(), false),
    new Todo(2, 'Learn Java', new Date(), false),
    new Todo(3, 'Get fit', new Date(), false)
  ];
  constructor() { }

  ngOnInit() {
  }

}
