import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoggingComponent } from './logging/logging.component';

enableProdMode();
@NgModule({
  declarations: [	
    AppComponent,
      MovieComponent,
      MoviesComponent,
      MovieDetailComponent,
      LoggingComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
