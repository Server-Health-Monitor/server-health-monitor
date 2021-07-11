import { Component, OnInit } from '@angular/core';
import { LocalStorageDbService } from '../../services/local-storage-db.service'

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.css']
})
export class ApplicationPageComponent implements OnInit {

  public appName = "Fakebook"
  public favorited = this.isFavorited()
  constructor(private lsdb: LocalStorageDbService) { }

  ngOnInit(): void {}

  private isFavorited(): boolean {
    return this.lsdb.getFavorites().includes(this.appName)
  }

}
