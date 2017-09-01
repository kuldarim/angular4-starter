import { Component, Input } from '@angular/core'

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNode {
  @Input() node;

  add(params) {
    params.children.push({name: 'n', children: []});
  }

  delete(params) {
    params.children = [];
  }
}
