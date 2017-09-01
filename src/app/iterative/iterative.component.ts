import { Component } from '@angular/core';
import { IterativeService, INode } from './iterative.service';

@Component({
  selector: 'my-about',
  templateUrl: './iterative.component.html',
  styleUrls: ['./iterative.component.scss'],
  providers: [IterativeService]
})
export class IterativeComponent {
  nodes: Array<INode> = [];

  constructor(private iterativeService: IterativeService) {
    this.nodes = this.iterativeService.nodes;
  }
}
