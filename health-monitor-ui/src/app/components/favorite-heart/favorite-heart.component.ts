import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-heart',
  templateUrl: './favorite-heart.component.html',
  styleUrls: ['./favorite-heart.component.css']
})
export class FavoriteHeartComponent implements OnInit {

  constructor() { }

  public favorited: boolean;

  ngOnInit(): void {
  }

  public clickEvent(){
    this.favorited = !this.favorited;
  }

}
