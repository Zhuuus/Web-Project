import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from '../personal-data.service';

@Component({
  selector: 'app-personal-account',
  standalone: true,
  imports: [],
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
  
})
export class PersonalAccountComponent implements OnInit {
  personalData: any[] = [];

  constructor(private personalDataService: PersonalDataService) {}

  ngOnInit(): void {
    this.personalDataService.getPersonalData().subscribe(data => {
      this.personalData = data;
    });
  }
}
