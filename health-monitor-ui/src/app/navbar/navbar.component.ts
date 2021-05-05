import { Component, OnInit } from '@angular/core';
import { LocalStorageDbService } from '../services/local-storage-db.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public companyName: string = this.lsDB.getCompanyName();
  public favorites: string[] = this.lsDB.getFavorites();

  constructor(private lsDB: LocalStorageDbService) { }

  ngOnInit(): void {
  }

}
