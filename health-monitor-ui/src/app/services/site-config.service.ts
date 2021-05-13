import { Injectable } from '@angular/core';
import { SiteConfig } from '../models/siteconfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteConfigService {

  constructor(private http: HttpClient) { }

  private serverAPI = "http://localhost:8080/"


  public getConfigs(): Observable<SiteConfig[]> {
    let endPoint = this.serverAPI + "siteconfig"
    return this.http.get<Array<SiteConfig>>(endPoint);
  }

}
