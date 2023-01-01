import { Component } from '@angular/core';
import {
  FormBuilder ,
  Validators ,
} from '@angular/forms';
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import {CurrentUser} from "../../models/currentUser";

@Component ( {
  selector : 'auth-login' ,
  templateUrl : './auth-login.component.html' ,
  styleUrls : [ './auth-login.component.css' ] ,
} )
export class AuthLoginComponent {
  constructor ( private formBuilder : FormBuilder , private service : AuthenticationService , private route : Router , private toast : ToastrService ) {
  }

  hide = true;

  loginForm = this.formBuilder.group ( {
    email : [ '' , [ Validators.required , Validators.email ] ] ,
    password : [ '' , [ Validators.required ] ] ,
  } );


  onSubmit () {
    console.log ( this.loginForm.value );
    this.service.login ( this.loginForm.value ).subscribe ( {
      next : ( data ) => {

        this.service.saveCurrentUser(data);
        let currentUser = this.service.getCurrentUser();

        if ( currentUser.Role === "User" ) {
          this.route.navigate ( [ 'user/home' ] )
        }

      } ,
      error : ( data ) => {

        this.toast.error ( "Invalid Username Or Password" );

      } ,
      complete : () => {
        this.loginForm.clearValidators ();
        this.loginForm.reset ();
      }
    } )
  }
}
