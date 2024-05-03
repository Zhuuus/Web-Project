import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'contact', component: ContactComponent, title: 'Contact'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'login', component: AppComponent, title: 'Login'},
    {path: 'signup', component: SignUpComponent, title: 'SignUp'},
    {path: ':id/personal-account', component: PersonalAccountComponent, title: 'personal-account'}
];
