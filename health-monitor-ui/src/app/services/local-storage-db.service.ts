import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageDbService {

  private readonly favoritesKey: string = "favorites";
  private readonly companyNameKey: string = "site_name";

  constructor() { }

  public getSiteName(): string {
    return JSON.parse(localStorage.getItem(this.companyNameKey));

  }

  public setCompanyName(companyName: string): void {
    this.pushToLocalStorage(this.companyNameKey,companyName);
  }

  public getFavorites(): string[] {
    return JSON.parse(localStorage.getItem("favorites"));
  }

  public addFavorite(favoriteName: string): void {
    let existingFaves = this.getFavorites();
    if (existingFaves == null) {
      let existingFaves = []
    }
    existingFaves.push(favoriteName);
    this.pushToLocalStorage(this.favoritesKey, existingFaves)
  }

  public pushToLocalStorage(key: string, value: Object) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
