import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  public task?: ITask;
  constructor(
    private tasksService: TasksService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    
  }

  public ngOnInit(): void {
    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');

    this.task = this.tasksService.getTaskById(id as string);
  }

  public goBack(): void {
    this.router.navigate(['/']);  
  }
}
