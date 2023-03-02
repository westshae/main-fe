import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { AuthGuard } from './services/auth.guard';

// { path:'blog', canActivate:[AuthGuard], component:BlogComponent }, 

const routes: Routes = [
  { path:'', component: DashboardComponent },
  { path:'blog', component:BlogComponent }, 
  { path:'portfolio', component:PortfolioComponent },
  { path:'contact', component:ContactComponent},
  { path:'authentication', component:AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
