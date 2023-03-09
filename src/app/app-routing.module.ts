import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { BlogTextComponent } from './pages/blogtext/blogtext.component';
import { HiremeComponent } from './pages/hireme/hireme.component';

import { AuthGuard } from './services/auth.guard';
import { BloguploadComponent } from './pages/blogupload/blogupload.component';

const routes: Routes = [
  { path:'', component: DashboardComponent },
  { path:'blog', canActivate:[AuthGuard], component:BlogComponent},
  { path:'blogupload', canActivate:[AuthGuard], component:BloguploadComponent} ,
  { path:'text/:id', canActivate:[AuthGuard], component: BlogTextComponent},
  { path:'authentication', component:AuthenticationComponent},
  { path:'hireme', component:HiremeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
