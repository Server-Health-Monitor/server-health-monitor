import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

import { LocalStorageDbService } from './services/local-storage-db.service';
import { BootstrapService } from './services/bootstrap.service';

import { SidebarComponent } from './navbar/sidebar/sidebar.component';
import { HealthSquareComponent } from './components/health-square/health-square.component';
import { HealthTileComponent } from './components/health-tile/health-tile.component';
import { FavoriteHeartComponent } from './components/favorite-heart/favorite-heart.component';
import { HealthSquaresBoxComponent } from './components/health-squares-box/health-squares-box.component';
import { ApplicationPageComponent } from './pages/application-page/application-page.component';
import { ApplicationsPageComponent } from './pages/applications-page/applications-page.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    HealthSquareComponent,
    HealthTileComponent,
    FavoriteHeartComponent,
    HealthSquaresBoxComponent,
    ApplicationPageComponent,
    ApplicationsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [LocalStorageDbService,
    BootstrapService,
    {
      provide: APP_INITIALIZER,
      useFactory: (bs: BootstrapService) => () => bs.start() ,
      deps: [BootstrapService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
