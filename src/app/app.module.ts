import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';//Imported for routing


import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FeedBackComponent } from './feed-back/feed-back.component';


/*const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'test',   component: TestComponent },
  { path: 'home',   component: HomeComponent },
];*/




@NgModule({
  imports:      [ BrowserModule, FormsModule , RoutingModule], //Here the routing module is imported.
  declarations: [ AppComponent, HeaderComponent, FooterComponent, HomeComponent, ProfileComponent, FeedBackComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
