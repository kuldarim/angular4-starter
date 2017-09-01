import { Injectable } from '@angular/core';

export interface INode {
  name: string;
  children: Array<INode>;
}

@Injectable()
export class RecursiveService {
  private _node: INode = {name: 'initial', children: []};

  constructor() {
    this._node = {name: 'root', children: [
      {name: 'a', children: []},
      {name: 'b', children: []},
      {name: 'c', children: [
        {name: 'd', children: []},
        {name: 'e', children: []},
        {name: 'f', children: []},
       ]},
    ]};
  }

  get node(): INode {
    return this._node;
  }
}
