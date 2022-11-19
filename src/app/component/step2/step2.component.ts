import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from '../../utilities/item-interface'
import { InformationService } from '../../service/information/information.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {


  information: any;
  status: Status[] = []

  today = new Date();
  maxDate = new Date();


  constructor(public informationService: InformationService, private router: Router) {
  }

  ngOnInit() {
    this.information = this.informationService.information;
    this.status = this.informationService.status;
    this.maxDate.setDate(this.today.getDate() + environment.day);
  }

  nextPage() {
    // if (this.paymentInformation.cardholderName && this.paymentInformation.cardholderNumber && this.paymentInformation.date && this.paymentInformation.cvv) {
    this.informationService.information = this.information;
    this.informationService.complete();
    this.router.navigate(['/step3']);
    // }
  }

  prevPage() {
    this.router.navigate(['/step1']);
  }
}
