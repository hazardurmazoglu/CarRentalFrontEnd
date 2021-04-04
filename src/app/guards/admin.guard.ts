import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  user:User;
  email:string;
  claim:Claim;
  constructor(private userService:UserService,private toastrService:ToastrService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.email=localStorage.getItem("email");
      this.userService.getbyEmail(this.email);
      this.userService.getClaims(this.user).subscribe(response=>{
        this.claim=response.data;
      })

      if (this.claim.id==1) {
        return true;
      } else {
        this.toastrService.info("You are not admin.")
        return false;
      }
      
  }
  
}
