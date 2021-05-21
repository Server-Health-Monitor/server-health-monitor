import { Injectable } from '@angular/core';
import { SiteConfig } from '../models/siteconfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiteConfigService {

  constructor(private http: HttpClient) { }

  private siteConfigAPI =  environment.apiUrl + "/siteconfig"

  public getConfigs(): Observable<SiteConfig[]> {
    return this.http.get<Array<SiteConfig>>(this.siteConfigAPI);
  }

}
