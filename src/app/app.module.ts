import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShellComponent } from './components/shell/shell.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { BlogTextComponent } from './pages/blogtext/blogtext.component';
import { HiremeComponent } from './pages/hireme/hireme.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ShellComponent,
    DashboardComponent,
    BlogComponent,
    AuthenticationComponent,
    BlogTextComponent,
    HiremeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
