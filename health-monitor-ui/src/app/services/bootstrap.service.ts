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

  public start(){
    this.loadConfig();
  }

  public loadConfig(){
    if (this.lsDB.getSiteName() == null) {
      this.scs.getConfigs().subscribe(res => {
        console.log(res);
        res.forEach(config => {
          this.lsDB.pushToLocalStorage(config.property,config.propertyValue);
        });
      });
    }

  }


}
