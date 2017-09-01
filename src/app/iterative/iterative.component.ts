import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './iterative.component.html',
  styleUrls: ['./iterative.component.scss']
})
export class IterativeComponent implements OnInit {

  nodes = [{
    name: 'a',
    depth: '1',
  }, {
    name: 'b',
    depth: '1|1'
  }, {
    name: 'c',
    depth: '1'
  }, {
    name: 'c',
    depth: '1|1'
  }];

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

  add(index) {
    const parent = this.nodes[index];
    if(parent) {
      this.nodes.splice(index + 1, 0, {name:'new', depth:`${parent.depth}|1`});
    }
  }

}
