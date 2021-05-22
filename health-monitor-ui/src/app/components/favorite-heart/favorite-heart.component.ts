import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalStorageDbService } from '../../services/local-storage-db.service'
@Component({
  selector: 'app-favorite-heart',
  templateUrl: './favorite-heart.component.html',
  styleUrls: ['./favorite-heart.component.css']
})
export class FavoriteHeartComponent implements OnInit {

  constructor(private lsdb: LocalStorageDbService) { }

  @Input() favorited: boolean;

  @Input() favoriteName: string;

  @Output() removeFromFavoritesList = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.lsdb.getFavorites();
  }

  public clickEvent(){
    if (!this.favorited){
      this.removeFavorite();
    }
    this.flipHeart();
  }

  public removeFavorite(){
    this.lsdb.removeFavorite(this.favoriteName);
    this.removeFromFavoritesList.emit(true);
  }

  public flipHeart(){
    this.favorited = !this.favorited;
  }

}
