import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.scss']
})
export class RecursiveComponent {

  node = {name: 'root', children: [
    {name: 'a', children: []},
    {name: 'b', children: []},
    {name: 'c', children: [
      {name: 'd', children: []},
      {name: 'e', children: []},
      {name: 'f', children: []},
     ]},
  ]};

}
