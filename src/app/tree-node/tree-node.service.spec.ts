import { TreeNodeService } from './tree-node.service';
import { inject, TestBed } from '@angular/core/testing';


describe('Recursive Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [TreeNodeService]});
  });

  it('should add nodes', inject([TreeNodeService], (service) => {
    const node = {name: 'root', children: []};

    expect(() => service.add(node)).not.toThrow(new Error('wrong object passed while calling add'));
  }));

  it('throw exception if wrong object passed to add', inject([TreeNodeService], (service) => {
    const node = {name: 'root'};

    expect(() => service.add(node)).toThrow(new Error('wrong object passed while calling add'));
  }));

  it('should delete nodes', inject([TreeNodeService], (service) => {
    const node = {name: 'root', children: [{name: 'root', children: []}]};

    expect(() => service.delete(node)).not.toThrow(new Error('already empty or does not have children property'));
  }));

  it('throw exception if wrong object passed to delete', inject([TreeNodeService], (service) => {
    const node = {name: 'root'};

    expect(() => service.delete(node)).toThrow(new Error('already empty or does not have children property'));
  }));

});
