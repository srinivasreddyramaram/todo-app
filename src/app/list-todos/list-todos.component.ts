import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    { id: 1, desc: 'Learn Angular' },
    { id: 2, desc: 'Learn Java' },
    { id: 3, desc: 'Go North' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
