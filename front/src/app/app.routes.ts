import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'contact', component: ContactComponent, title: 'Contact'},
    {path: 'login', component: LoginComponent, title: 'Login'},
];
