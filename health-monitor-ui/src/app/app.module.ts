import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LocalStorageDbService } from './services/local-storage-db.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HealthSquareComponent } from './components/health-square/health-square.component';
import { HealthTileComponent } from './components/health-tile/health-tile.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    HealthSquareComponent,
    HealthTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LocalStorageDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
