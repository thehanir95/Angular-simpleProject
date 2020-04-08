import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { from } from 'rxjs';


const routes: Routes = [
 { path: 'home' , component: HomeComponent},
 { path: 'profile' , component:ProfileComponent},
 { path: 'aboutus' , component:AboutusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
