import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.css']
})
export class ApplicationPageComponent implements OnInit {

  public appName = "Fakebook"
  public favorited = false
  constructor() { }

  ngOnInit(): void {
  }

}
