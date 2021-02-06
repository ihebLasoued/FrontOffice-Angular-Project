import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoginGuardService {
  isLoggedIn:boolean=true;
  constructor(private storageService:StorageService,private router:Router) {
    if(this.storageService.getUser()===null)
    {
     this.isLoggedIn = false;
    }
   }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let token = sessionStorage.getItem("auth-token");
    if (token != null) {
      this.router.navigate(['home']);
      return false;

    }

    return true;

  }
}
