import { Component, OnInit } from '@angular/core';
import {LocalStorageDbService} from '../services/local-storage-db.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public favorites: string[] = this.lsDB.getFavorites();

  constructor(private lsDB: LocalStorageDbService) { }

  ngOnInit(): void {
  }

}
