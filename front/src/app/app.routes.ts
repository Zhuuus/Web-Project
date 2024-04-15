import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'contact', component: ContactComponent, title: 'Contact'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'login/signup', component: SignUpComponent, title: 'SignUp'},
    {path: 'personal-account', component: PersonalAccountComponent, title: 'personal-account'}
];
