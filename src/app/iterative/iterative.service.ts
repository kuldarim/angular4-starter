import { Injectable } from '@angular/core';

export interface INode {
  name: string;
  depth: string;
}

@Injectable()
export class IterativeService {
  private _nodes: Array<INode> = [];

  notReduced = [{name: 'root', children: [
    {name: 'a', children: []},
    {name: 'b', children: []},
    {name: 'c', children: [
      {name: 'd', children: []},
      {name: 'e', children: []},
      {name: 'f', children: []},
     ]},
  ]}];

  constructor() {
    this._nodes = this.flatten(this.notReduced, undefined);
    console.log(this._nodes);
  }

  get nodes(): Array<INode> {
    return this._nodes;
  }

  add(index: number) {
    if (index > this.nodes.length || index < 0) {
      throw (new Error(`${index} is out of bounds`));
    }
    const parent = this.nodes[index];
    if (parent) {
      this._nodes.splice(index + 1, 0, {name: 'new', depth: `${parent.depth}|`});
    }
  }

  flatten(arr, depth) {
    return arr.reduce((explored, toExplore) => {
      const currentDepth = depth ? depth + '|' : '|';
      explored.push({name: toExplore.name, depth: currentDepth});
          return explored.concat(
            Array.isArray(toExplore.children) && toExplore.children.length
              ? this.flatten(toExplore.children, currentDepth)
              : toExplore.children
          );
    }, []);
  }
}
