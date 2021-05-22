import { Injectable } from '@angular/core';
import { LocalStorageDbService } from '../services/local-storage-db.service';
import { SiteConfigService } from '../services/site-config.service';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  constructor(
    private lsDB: LocalStorageDbService,
    private scs: SiteConfigService
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
    setInterval(function () {
      console.log("Refreshing data from server...");
    }, 60 * 1000);
  }


}
