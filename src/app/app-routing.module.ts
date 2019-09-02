import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithabComponent } from './githab/githab.component'

const routes: Routes = [
  { path: 'user', component: GithabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
