import { TreeNodeComponent } from './tree-node/tree-node.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecursiveComponent } from './recursive/recursive.component';
import { IterativeComponent } from './iterative/iterative.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    RecursiveComponent,
    IterativeComponent,
    TreeNodeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
