import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  node = {name: 'root', children: [
    {name: 'a', children: []},
    {name: 'b', children: []},
    {name: 'c', children: [
      {name: 'd', children: []},
      {name: 'e', children: []},
      {name: 'f', children: []},
     ]},
  ]};

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
