import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Project } from '../models/project';
import { Milestone } from '../models/milestone';
import { Task } from '../models/task';
import { TaskLog } from '../models/task-log';
import { Resource } from '../models/resource';
import { Department } from '../models/department';
import { ResourcePOV } from '../models/resource-pov';
import { Holiday } from '../models/holiday';
import { WorkingDay } from '../models/working-day';
import { Title } from '../models/title';
import { Allocation } from '../models/allocation';
import { ResourcePlan } from '../models/resource-plan';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000/',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Credentials': 'true'
    })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private apiURL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getProjects(year_id: number): Observable<Project[]> {
    return this.http.get<any[]>(this.apiURL + 'projects')
      .pipe(
        tap(projects => `${JSON.stringify(projects)}`),
        catchError(this.handleError('getProjects', []))
      );
  }

  getMilestones(): Observable<Milestone[]> {
    return this.http.get<any[]>(this.apiURL + 'milestones')
      .pipe(
        tap(milestones => `${JSON.stringify(milestones)}`),
        catchError(this.handleError('getMilestones', []))
      );
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<any[]>(this.apiURL + 'tasks')
      .pipe(
        tap(tasks => `${JSON.stringify(tasks)}`),
        catchError(this.handleError('getTasks', []))
      );
  }

  getTaskById(id: number): Observable<Task[]> {
    return this.http.get<any[]>(this.apiURL + 'tasks/details/' + id)
      .pipe(
        tap(tasks => `${JSON.stringify(tasks)}`),
        catchError(this.handleError('getTaskById', []))
      );
  }

  getTaskLogById(id: number): Observable<TaskLog[]> {
    return this.http.get<any[]>(this.apiURL + 'tasks/log/' + id)
      .pipe(
        tap(tasks => `${JSON.stringify(tasks)}`),
        catchError(this.handleError('getTaskLogById', []))
      );
  }

  getResources(): Observable<Resource[]> {
    return this.http.get<any[]>(this.apiURL + 'resources')
      .pipe(
        tap(resources => `${JSON.stringify(resources)}`),
        catchError(this.handleError('getResources', []))
      );
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<any[]>(this.apiURL + 'departments')
      .pipe(
        tap(departments => `${JSON.stringify(departments)}`),
        catchError(this.handleError('getDepartments', []))
      );
  }

  getProjectById(project_id: number): Observable<Project[]> {
    return this.http.get<any>(this.apiURL + 'projects/' + project_id)
      .pipe(
        tap(projects => console.log(`${JSON.stringify(projects)}`),
          catchError(this.handleError('getProjectById', [])))
      );
  }

  getMilestonesByProjectId(project_id: number): Observable<Milestone[]> {
    return this.http.get<any[]>(this.apiURL + 'milestones/' + project_id)
      .pipe(
        tap(milestones => this.log(`fetched milestones ${JSON.stringify(milestones)}`)),
        catchError(this.handleError('getMilestonesByProjectId', []))
      );
  }

  getTasksByProjectId(project_id: number): Observable<Task[]> {
    return this.http.get<any[]>(this.apiURL + 'tasks/' + project_id)
      .pipe(
        tap(tasks => this.log(`fetched tasks ${JSON.stringify(tasks)}`)),
        catchError(this.handleError('getTasksByProjectId', []))
      );
  }

  getResourcesByProjectId(project_id: number): Observable<Resource[]> {
    return this.http.get<any[]>(this.apiURL + 'resources/' + project_id)
      .pipe(
        tap(resources => this.log(`fetched tasks ${JSON.stringify(resources)}`)),
        catchError(this.handleError('getResourcesByProjectId', []))
      );
  }

  createTask(task: Task) {
    console.log('data-service: ' + task.name);
    return this.http.post<any>(this.apiURL + 'tasks/create', task, httpOptions);
    /*
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        });
    */
  }

  saveTaskLog(taskLog: TaskLog): Observable<TaskLog[]> {
    return this.http.post<any[]>(this.apiURL + 'tasks/create-log', taskLog, httpOptions);
  }

  getResourcePOV(week: number) {
    return this.http.get<ResourcePOV[]>(this.apiURL + 'resources/' + week)
      .pipe(
        tap(resurcePOV => this.log(`getResourcePOV ${JSON.stringify(resurcePOV)}`)),
        catchError(this.handleError('getResourcePOV', []))
      );
  }

  getHolidays() {
    return this.http.get<Holiday[]>(this.apiURL + 'holidays/' )
      .pipe(
        tap(holidays => this.log(`getHolidays ${JSON.stringify(holidays)}`)),
        catchError(this.handleError('getHoldaiys', []))
      );
  }

  getWorkingDays() {
    return this.http.get<WorkingDay[]>(this.apiURL + 'working-days/' )
      .pipe(
        tap(workingDays => this.log(`getWorkingDays ${JSON.stringify(workingDays)}`)),
        catchError(this.handleError('getWorkingDays', []))
      );
  }


  getTitles() {
    return this.http.get<Title[]>(this.apiURL + 'titles/' )
      .pipe(
        tap(titles => this.log(`getTitles ${JSON.stringify(titles)}`)),
        catchError(this.handleError('getTitles', []))
      );
  }

  getAllocations() {
    return this.http.get<Allocation[]>(this.apiURL + 'allocations/' )
      .pipe(
        tap(allocations => this.log(`getAllocations ${JSON.stringify(allocations)}`)),
        catchError(this.handleError('getAllocations', []))
      );
  }


  getResourcePlan() {
    return this.http.get<ResourcePlan[]>(this.apiURL + 'resource-plan/' )
      .pipe(
        tap(resourcePlan => this.log(`getResourcePlan ${JSON.stringify(resourcePlan)}`)),
        catchError(this.handleError('getResourcePlan', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ChannelService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ChannelService: ' + message);
  }
}
