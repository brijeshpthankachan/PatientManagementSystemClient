```ts
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
})
export class AuthLoginComponent {
  constructor(private formBuilder: FormBuilder) { }

  hide = true;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    ts: new FormArray([this.formBuilder.control('')]),
  });

  getValuesOfTestArray = () => this.loginForm.get('ts') as FormArray;

  addControlToTestArray() {
  this.loginForm.controls.ts.push(this.formBuilder.control(''));
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
```

```html

<div class="container">
  <div class="grid">
    <form class="form" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <mat-form-field appearance="outline" class="my">
        <mat-label>Email</mat-label>
        <input matInput formControlName="email" required />
        <!--        <mat-error  *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>-->
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Password</mat-label>
        <input
          matInput
          formControlName="password"
          [type]="hide ? 'password' : 'text'"
        />
        <button mat-icon-button matSuffix (click)="hide = !hide">
          <mat-icon class="material-symbols-outlined">{{
            hide ? "visibility_off" : "visibility"
          }}</mat-icon>
        </button>
      </mat-form-field>
      <button [disabled]="loginForm.invalid" mat-raised-button color="accent">
        Login
      </button>

      <button mat-raised-button color="warn" (click)="addControlToTestArray()">
        +
      </button>

      <div formArrayName="ts" class="form">
        <ng-container
          *ngFor="let o of loginForm.controls.ts.controls; let i = index"
        >
          <mat-form-field appearance="outline">
            <mat-label>name</mat-label>
            <input [formControlName]="i" matInput />
          </mat-form-field>
        </ng-container>
      </div>
    </form>

    <p>{{ loginForm.value | json }}</p>
  </div>
</div>


```