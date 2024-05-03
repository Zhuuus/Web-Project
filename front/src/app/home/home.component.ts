import { Component } from '@angular/core';
import { PersonalDataService } from '../personal-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userData: any;

  constructor(private personalDataService: PersonalDataService) {}

    ngOnInit(): void {
      this.personalDataService.getUserData().subscribe(data => {
        this.userData = data;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
    }
}
