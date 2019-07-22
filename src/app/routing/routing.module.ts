import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { ProfileComponent} from '../profile/profile.component'
import { FeedBackComponent} from '../feed-back/feed-back.component'

import { RouterModule, Routes } from '@angular/router';//Imported for routing



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home',   component: HomeComponent },
  { path: 'profile',   component: ProfileComponent },
  { path: 'feedback',   component: FeedBackComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule //imports the module appRoutes to root
  ]
})

export class RoutingModule { };