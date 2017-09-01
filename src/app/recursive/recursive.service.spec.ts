import { inject, TestBed } from '@angular/core/testing';

import { RecursiveService } from './recursive.service';

fdescribe('Recursive Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [RecursiveService]});
  });

  fit('should return nodes', inject([RecursiveService], (service) => {
    const nodes = {name: 'root', children: [
      {name: 'a', children: []},
      {name: 'b', children: []},
      {name: 'c', children: [
        {name: 'd', children: []},
        {name: 'e', children: []},
        {name: 'f', children: []},
       ]},
    ]};
    expect(service.node.name).toBe(nodes.name);
  }));

});
