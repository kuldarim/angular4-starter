import { Component } from '@angular/core';
import { INode, RecursiveService } from './recursive.service';

@Component({
  selector: 'my-home',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.scss'],
  providers: [RecursiveService]
})
export class RecursiveComponent {
  node: INode = {name: 'initial', children: []};

  constructor(private recursiveService: RecursiveService) {
    this.node = this.recursiveService.node;
  }
}
