import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/utility/app.guard';

const routes: Routes = [
{ path: 'profile', loadChildren: () => import('./app.module').then(m => m.AppModule), canActivate: [AuthGuard] }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
