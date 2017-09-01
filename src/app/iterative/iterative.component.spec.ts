import { TestBed } from '@angular/core/testing';

import { IterativeComponent } from './iterative.component';

describe('About Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [IterativeComponent]});
  });

  it('should contain title', () => {
    const fixture = TestBed.createComponent(IterativeComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Iterative tree');
  });

});
