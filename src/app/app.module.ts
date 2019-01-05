import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { PlaceComponent } from './place/place.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchBarComponent,
    MainScreenComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
