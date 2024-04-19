import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { first } from 'rxjs';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    RouterLink
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      inputEmail: new FormControl(''),
      inputPassword: new FormControl('')
    });
  }

  get f() {
    return this.logInForm.controls;
  }

  logIn() {
    this.loginService.logIn(this.f['inputEmail'].value, this.f['inputPassword'].value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error(error);
        }
      );
  }
}
