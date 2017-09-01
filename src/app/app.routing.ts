import { RouterModule, Routes } from '@angular/router';

import { RecursiveComponent } from './recursive/recursive.component';
import { IterativeComponent } from './iterative/iterative.component';

const routes: Routes = [
  { path: '', component: RecursiveComponent },
  { path: 'iterative', component: IterativeComponent}
];

export const routing = RouterModule.forRoot(routes);
