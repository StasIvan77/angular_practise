import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { KebabCasePipe } from './pipes/kebab-case.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskDetailComponent,
    HighlightDirective,
    KebabCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
