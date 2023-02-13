import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ChessComponent } from './pages/chess/chess.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

const routes: Routes = [
  { path:'', component: DashboardComponent },
  { path:'blog', component:BlogComponent }, 
  { path:'portfolio', component:PortfolioComponent },
  { path:'settings', component:SettingsComponent},
  { path:'contact', component:ContactComponent},
  { path:'chess', component:ChessComponent},
  { path:'authentication', component:AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
