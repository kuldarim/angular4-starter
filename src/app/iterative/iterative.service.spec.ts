import { inject, TestBed } from '@angular/core/testing';

import { IterativeService } from './iterative.service';

fdescribe('Iterative Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [IterativeService]});
  });

  it('should return nodes', inject([IterativeService], (service) => {
    const nodes = [{
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
    expect(service.nodes[0].name).toBe(nodes[0].name);
  }));

  it('should add node in specified depth', inject([IterativeService], (service) => {
    const index = 1;
    const nodesBefore = [...service.nodes];
    service.add(index);
    const nodesAfter = [...service.nodes];
    expect(nodesAfter.length).toBeGreaterThan(nodesBefore.length);
  }));

  it('should throw exception if index less then 0', inject([IterativeService], (service) => {
    const index = -1;

    expect(() => service.add(index)).toThrow(new Error(`${index} is out of bounds`));
  }));

  it('should throw exception if index greater then nodes count', inject([IterativeService], (service) => {
    const index = service.nodes.length + 1;

    expect(() => service.add(index)).toThrow(new Error(`${index} is out of bounds`));
  }));

});
