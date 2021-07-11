import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Servers } from '../models/server';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: HttpClient) { }

  private API =  environment.apiUrl + "/servers"

  public getServers(): Observable<Servers> {
    return this.http.get<Servers>(this.API);
  }
}
