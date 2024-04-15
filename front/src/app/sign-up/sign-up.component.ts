import { Component } from '@angular/core';
import { UserRegister } from '../models';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  users!: UserRegister[]
  inputName: string = "";
  inputSureName: string = "";
  inputEmail: string = "";


  constructor(private route: ActivatedRoute,
    private signUpService: SignupService) {
  }

  createUser() {
    this.signUpService.createUser(this.users.id, this.inputName, this.inputSureName, this.inputEmail).subscribe((user) =>
      this.users. = user.id
    );
    this.inputName = "";
  }

}
