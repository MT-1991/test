import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from 'src/app/service/information/information.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  information: any;
  reader = new FileReader();
  imageSrc: string | ArrayBuffer | null = "";

  constructor(public informationService: InformationService, private router: Router) { }

  ngOnInit() {
    this.information = this.informationService.information;
    this.reader.onload = e => {
      this.imageSrc = this.reader.result;
    }
    this.reader.readAsDataURL(this.information.fileObject);
  }


  prevPage() {
    this.router.navigate(['/step3']);
  }
}
