import { Injectable } from '@angular/core';
import { LocalStorageDbService } from '../services/local-storage-db.service';
import { SiteConfigService } from '../services/site-config.service';
import { ServersService } from './servers.service';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  constructor(
    private lsDB: LocalStorageDbService,
    private scs: SiteConfigService,
    private ss: ServersService
  ) { }

  public start() {
    console.log("Boostrap service started!")
    this.loadConfig();
    this.dataRefresher();
  }

  private loadConfig() {
    if (this.lsDB.getSiteName() == null) {
      console.log("loading configs!")
      this.scs.getConfigs().subscribe(res => {
        console.log(res);
        res.forEach(config => {
          this.lsDB.pushToLocalStorage(config.property, config.propertyValue);
        });
      });
    }
  }

  private dataRefresher() {
    console.log("Started scheduled data refresher");
    setInterval(() => {
      console.log("Refreshing data from server...");
      this.ss.getServers().subscribe(servers => {
        console.log(servers);
        this.lsDB.pushToLocalStorage("servers",JSON.stringify(servers));
      })
    }, 60 * 1000);
  }



}
