import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Server } from '../models/server';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: HttpClient) { }

  private siteConfigAPI =  environment.apiUrl + "/servers"

  public getServers(): Observable<Server[]> {
    return null;
  }
}
