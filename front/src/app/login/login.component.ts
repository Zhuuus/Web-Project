import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      inputEmail: ['', Validators.required],
      inputPassword: ['', Validators.required]
    });
  }

  logIn() {
    if (this.logInForm.valid) {
      const emailControl = this.logInForm.get('inputEmail');
      const passwordControl = this.logInForm.get('inputPassword');
  
      if (emailControl && passwordControl) {
        const email = emailControl.value;
        const password = passwordControl.value;
  
        this.loginService
          .logIn(email, password)
          .pipe(first())
          .subscribe(
            (data) => {
              console.log(data);
              // Redirect or perform any other action upon successful login
              this.router.navigate(['/:id/home']);
            },
            (error) => {
              console.error(error);
              // Handle login error
            }
          );
      }
    }
  }
  
}
