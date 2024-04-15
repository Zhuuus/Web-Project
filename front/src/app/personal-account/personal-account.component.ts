import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from '../personal-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonalData } from '../models';

@Component({
  selector: 'app-personal-account',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
  
})
export class PersonalAccountComponent implements OnInit {
  personalData: any[] = [];

  constructor(private personalDataService: PersonalDataService) {}

    ngOnInit(): void {
      this.personalDataService.getPersonalDataset().subscribe(data => {
        this.personalData = data;
      });
    }
}
