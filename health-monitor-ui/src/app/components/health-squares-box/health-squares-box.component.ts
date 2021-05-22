import { Component, OnInit } from '@angular/core';
import { Servers } from 'src/app/models/server';
import { LocalStorageDbService } from '../../services/local-storage-db.service';


@Component({
  selector: 'app-health-squares-box',
  templateUrl: './health-squares-box.component.html',
  styleUrls: ['./health-squares-box.component.css']
})
export class HealthSquaresBoxComponent implements OnInit {

  public servers: Servers = JSON.parse(this.lsDB.getAllServers());

  constructor(
    private lsDB: LocalStorageDbService,
  ) { }

  ngOnInit(): void {
    console.log(this.servers)
  }

}
