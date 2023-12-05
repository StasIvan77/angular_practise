import { Component, OnInit } from '@angular/core';
import { ITask, Task } from '../task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public tasks$: Observable<ITask[]> = this.tasksService.tasks$;
  public selectedTask: ITask | undefined;

  constructor(
    private tasksService: TasksService,
    private router: Router
    ) {}

  public ngOnInit(): void {
    this,this.tasksService.setTasks([
      new Task('Task 1', 'test...'),
      new Task('Task 2', 'test...')
    ]);
  }

  public selectTask(task: ITask): void {
      this.selectedTask = task;
  }  

  public navigateToCreate():void {
      this.router.navigate(['task-create']);
  }

  public navigateToTask(id: string) : void {
    this.router.navigate(['task', id]);
  }
}
