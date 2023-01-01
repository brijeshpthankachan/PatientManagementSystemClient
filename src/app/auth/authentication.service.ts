import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRouteSnapshot , CanActivate , Router } from "@angular/router";
import { CurrentUser } from "../models/currentUser";

@Injectable ( {
  providedIn : 'root'
} )
export class AuthenticationService implements CanActivate {

  constructor ( private http : HttpClient , private router : Router ) {
  }

  login ( data : any ) {
    return this.http.post ( 'https://localhost:7296/api/Accounts/login' , data )
  }

  canActivate ( route : ActivatedRouteSnapshot ) : boolean {
    return route.data[ 'roles' ].includes ( this.getCurrentUser ().Role ) ? true : false
  }

  getCurrentUser () : CurrentUser {
    return JSON.parse ( JSON.parse ( JSON.stringify ( atob ( ( localStorage.getItem ( "jwt" ) as string ).split ( '.' )[ 1 ] ) ) ) );
  }

  saveCurrentUser ( data : Object ) : CurrentUser {
    localStorage.setItem ( "jwt" , JSON.parse ( JSON.stringify ( data ) ).data );
    let currentUser : CurrentUser = JSON.parse ( JSON.parse ( JSON.stringify ( atob ( ( localStorage.getItem ( "jwt" ) as string ).split ( '.' )[ 1 ] ) ) ) );
    return currentUser;
  }
}
