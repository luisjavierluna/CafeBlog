import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UsComponent } from './us/us.component';
import { CoursesComponent } from './courses/courses.component';
import { EntryComponent } from './entry/entry.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'us', component: UsComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'entry', component: EntryComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
