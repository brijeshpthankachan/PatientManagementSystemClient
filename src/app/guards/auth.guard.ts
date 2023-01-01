import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot , CanActivate , RouterStateSnapshot , UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from "../auth/authentication.service";

@Injectable ( {
  providedIn : 'root'
} )
export class AuthGuard implements CanActivate {

  constructor ( private service : AuthenticationService ) {
  }

  canActivate (
    route : ActivatedRouteSnapshot ,
    state : RouterStateSnapshot ) {

    return this.service.canActivate ( route );

  }

}
