import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { SignupService } from '../signup.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private router: Router,
    private signUpService: SignupService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      inputfullName: [''],
      inputEmail: [''],
      inputPhoneNumber: [''],
      inputDate: [''],
      inputPassword: ['']
    });
  }

  signUp() {
    this.signUpService.signUp(this.signUpForm.value)
      .subscribe(
        res => {
          alert('SIGNUP SUCCESSFUL');
          this.signUpForm.reset();
          this.router.navigate(['login']);
        },
        err => {
          alert('Something went wrong');
        }
      );
  }
}
