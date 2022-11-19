import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/utilities/person';
import { InformationService } from '../../service/information/information.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {


  information: any;

  persons: Person[] = [];


  constructor(public informationService: InformationService, private router: Router) { }

  ngOnInit() {
    this.information = this.informationService.information;

    this.persons = this.informationService.persons;
  }


  nextPage(person: Person) {
    this.information.person = person
    this.informationService.information = this.information;
    this.informationService.complete();
    this.router.navigate(['/step4']);
  }

  prevPage() {
    this.router.navigate(['/step2']);
  }

}
