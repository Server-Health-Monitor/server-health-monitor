import { Injectable } from '@angular/core';
import { Servers } from '../models/server';

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

  public removeFavorite(favoriteName: string): void {
    let existingFaves = this.getFavorites();
    if (existingFaves == null) {
      return
    }
    for(let i =0; i < existingFaves.length ;i++){
      if(existingFaves[i] == favoriteName){
        existingFaves.splice(i,1);
        break;
      }
    }
    this.pushToLocalStorage(this.favoritesKey, existingFaves)
  }

  public pushToLocalStorage(key: string, value: Object) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  public getAllServers(): string{
    return localStorage.getItem("servers");
  }
}
