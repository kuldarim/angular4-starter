import { INode } from '../recursive/recursive.service';
import { TreeNodeService } from './tree-node.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  providers: [TreeNodeService]
})
export class TreeNodeComponent {
  @Input() node: INode;

  constructor(public treeNodeService: TreeNodeService) {

  }

  add(node) {
    try {
      this.treeNodeService.add(node);
    } catch (ex) {
      console.log(ex);
    }
  }

  delete(node) {
    try {
      this.treeNodeService.delete(node);
    } catch (ex) {
      console.log(ex);
    }
  }
}
