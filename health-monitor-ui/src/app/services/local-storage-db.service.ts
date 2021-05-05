import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageDbService {

  private readonly favoritesKey: string = "favorites";

  constructor() { }

  public getFavorites(): string[] {
    return ["", ""]
  }

  public addFavorite(favoriteName: string): void {
    let existingFaves = this.getFavorites();
    if (existingFaves == null) {
      let existingFaves = []
    }
    existingFaves.push(favoriteName);
    this.pushToLocalStorage(this.favoritesKey, existingFaves)
  }

  private pushToLocalStorage(key: string, value: Object) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
