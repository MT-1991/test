import { Component } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { InformationService } from './service/information/information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'interview';
  items: MenuItem[] = [];
  stepIndex = 1
  subscription: Subscription | undefined;
  constructor(public messageService: MessageService, public informationService: InformationService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [{
      label: 'Step1',
      routerLink: 'step1'
    },
    {
      label: 'Step2',
      routerLink: 'step2'
    },
    {
      label: 'Step3',
      routerLink: 'step3'
    },
    {
      label: 'Step4',
      routerLink: 'step4'
    }
    ];


    this.subscription = this.informationService.informationComplete$.subscribe((informationComplete) => {
      this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + informationComplete.count  + ' your order completed.' });
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
