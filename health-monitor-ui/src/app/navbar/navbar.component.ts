import { Component } from '@angular/core';
import { LocalStorageDbService } from '../services/local-storage-db.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public companyName: string = this.lsDB.getSiteName();

  constructor(private lsDB: LocalStorageDbService) { }

}
