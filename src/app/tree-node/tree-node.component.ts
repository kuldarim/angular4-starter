import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {
  @Input() node;

  add(params) {
    params.children.push({name: 'n', children: []});
  }

  delete(params) {
    params.children = [];
  }
}
