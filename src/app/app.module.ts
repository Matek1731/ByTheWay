import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { PlacePopUpComponent } from './place-pop-up/place-pop-up.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';



// const appRoutes: Routes = [,
//   { path: 'place/:id',      component: PlaceComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchBarComponent,
    MainScreenComponent,
    PlacePopUpComponent],
  entryComponents: [],
  bootstrap: [AppComponent],
  imports: [
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // ),
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // for database
    PopupModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
})
export class AppModule { }
