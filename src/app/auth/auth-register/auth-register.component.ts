import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent {

  genders: Array<string> = [
    "Male",
    "Female",
    "Other"
  ];
  bloodGroups: Array<string> = [
    "A", "B", "O", "AB", "A+", "B+", "O+", "AB+"
  ]

}
