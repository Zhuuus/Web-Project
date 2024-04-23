import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {PersonalData} from "./models";
import { LoginService } from './login.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { SignupService } from './signup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'front';

  logged: boolean = false;
  signed: boolean = false;
  username: string = "";
  password: string = "";
  signupUsername: string = "";
  signupPassword: string = "";
  categories: PersonalData[] = [];
  // newCategory: string = "";
  constructor(private loginService: LoginService, private signupService: SignupService) {
  }

  ngOnInit() {
    const access = localStorage.getItem("access");
    if (access) {
      this.logged = true;
      this.getPersonalDataset();
    }
  }

  login() {
    this.loginService
      .login(this.username, this.password)
      .subscribe((data) => {
        this.logged = true;
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        this.getPersonalDataset();
      })
  }

  signup() {
    this.signed = true
  }

  register() {
    this.signupService.signUp(this.signupUsername, this.signupPassword).subscribe((data) => {
      this.signed = false;
    }, (error) => {
      console.log(error);
    });
  }

  getPersonalDataset() {
    this.loginService
      .getPersonalDataset()
      .subscribe((data) => {
        this.categories = data;
      });
  }

  logout() {
    this.logged = false;
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }
  
}
