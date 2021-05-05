import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public companyName: string = "Company Name Inc."
  public favorites: string[] = JSON.parse(localStorage.getItem("favorites"));

  constructor() { }

  ngOnInit(): void {
    console.log(this.favorites)
  }

}
