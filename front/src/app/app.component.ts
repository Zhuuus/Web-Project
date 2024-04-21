import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {PersonalData} from "./models";
import { LoginService } from './login.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

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
  username: string = "";
  password: string = "";
  categories: PersonalData[] = [];
  // newCategory: string = "";
  constructor(private loginService: LoginService) {
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
