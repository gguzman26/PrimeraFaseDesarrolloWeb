import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/utility/app.guard';

const routes: Routes = [
{ 
  path: '', loadChildren: () => import('./layout-profile/layout-profile.module')
                .then(m => m.LayoutProfileModule), canActivate: [AuthGuard] }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
