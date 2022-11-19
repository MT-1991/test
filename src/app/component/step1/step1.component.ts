import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InformationService } from '../../service/information/information.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  information: any;

  constructor(public messageService: MessageService, public informationService: InformationService, private router: Router) { }

  ngOnInit() {
    this.information = this.informationService.information;
  }

  onUpload(event: any) {
    this.information.fileObject = event.files[0];
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }


  nextPage() {
    this.informationService.information = this.information;
    this.informationService.complete();
    this.router.navigate(['/step2']);
  }

}
