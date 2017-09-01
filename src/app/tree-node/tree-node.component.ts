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
}
