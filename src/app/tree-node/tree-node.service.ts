import { INode } from '../recursive/recursive.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TreeNodeService {

  add(node: INode) {
    if (node.children) {
      node.children.push({name: 'n', children: []});
    }
  }

  delete(node: INode) {
    if (node.children && node.children.length) {
      node.children = [];
    }
  }
}
