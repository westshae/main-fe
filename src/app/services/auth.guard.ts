import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router)
  {

  }
  canActivate() :boolean {
      if(typeof window === "undefined") return (false);

      const token = window.localStorage.getItem("token");  
      if(token != null) return (true);

      //If failed
      this.router.navigate(['/authentication']);
      return (false);
  }
}