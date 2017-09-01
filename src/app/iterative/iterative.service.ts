import { Injectable } from '@angular/core';

export interface INode {
  name: string;
  depth: string;
}

@Injectable()
export class IterativeService {
  private _nodes: Array<INode> = [];

  constructor() {
    this._nodes = [{
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
  }

  get nodes(): Array<INode> {
    return this._nodes;
  }

  add(index: number) {
    const parent = this.nodes[index];
    if(parent) {
      this._nodes.splice(index + 1, 0, {name:'new', depth:`${parent.depth}|1`});
    }
  }
}
