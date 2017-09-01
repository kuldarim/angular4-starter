import { INode } from '../recursive/recursive.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TreeNodeService {

  add(node: INode) {
    if (node.children) {
      node.children.push({name: 'n', children: []});
    } else {
      throw(new Error('wrong object passed while calling add'));
    }
  }

  delete(node: INode) {
    if (node.children && node.children.length) {
      node.children = [];
    } else {
      throw(new Error('already empty or does not have children property'));
    }
  }
}
