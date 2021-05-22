import { Component } from '@angular/core';
import {LocalStorageDbService} from '../services/local-storage-db.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public favorites: string[] = this.lsDB.getFavorites();

  constructor(private lsDB: LocalStorageDbService) { }

  public favoriteRemoved(b: boolean){
    if (b){
      this.favorites = this.lsDB.getFavorites();
    }
  }
}
