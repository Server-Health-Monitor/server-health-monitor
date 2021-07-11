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

  public clickEvent(): void{
    if (!this.favorited){
      this.removeFavorite();
    } else {
      this.addFavorite();
    }
    this.flipHeart();
  }

  public removeFavorite(): void{
    this.lsdb.removeFavorite(this.favoriteName);
    this.removeFromFavoritesList.emit(true);
  }

  public addFavorite(): void{
    this.lsdb.addFavorite(this.favoriteName);
  }

  public flipHeart(): void{
    this.favorited = !this.favorited;
  }

}
