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
    PopupModule,
    BrowserAnimationsModule
  ],
  providers: [],
})
export class AppModule { }
