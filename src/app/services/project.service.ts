import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../models/project.model";
import {environment} from "../../environments/environment";

@Injectable()
export class ProjectService {

  private readonly baseUrl: string = `${environment.backendUrl}/projects`;

  constructor(private http:HttpClient) {
  }

  public getProjects():Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }

  public getOneProject(id:string):Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`);  }

  public addProject(project:Project):Observable<Project> {
    return this.http.post<Project>(`${this.baseUrl}/create`, project);
  }

  public editProject(project:Project, id:string):Observable<Project> {
    return this.http.put<Project>(`${this.baseUrl}/update/${id}`,project);
  }

  public deleteProject(id:string):Observable<Project> {
    return this.http.delete<Project>(`${this.baseUrl}/${id}`);
  }

}
