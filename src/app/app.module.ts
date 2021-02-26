import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoggingComponent } from './logging/logging.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

enableProdMode();
@NgModule({
  declarations: [	
    AppComponent,
      MovieComponent,
      MoviesComponent,
      MovieDetailComponent,
      LoggingComponent,
      NavbarComponent,
      DashboardComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
