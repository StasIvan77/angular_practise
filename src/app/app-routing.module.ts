import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';

const rotes: Routes = [
  { path: '', component: TaskListComponent},
  { path: 'task-create', component: TaskFormComponent},
  { path: 'task/:id', component: TaskDetailComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rotes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
