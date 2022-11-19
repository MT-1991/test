import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {EditorModule} from 'primeng/editor';
import {CalendarModule} from 'primeng/calendar';
import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {FieldsetModule} from 'primeng/fieldset';
import {SplitterModule} from 'primeng/splitter';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import {ImageModule} from 'primeng/image';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';


import { Step1Component } from './component/step1/step1.component';
import { Step2Component } from './component/step2/step2.component';
import { Step3Component } from './component/step3/step3.component';
import { HttpClientModule } from '@angular/common/http';
import { Step4Component } from './component/step4/step4.component';
import { InputRestrictionDirective } from './utilities/InputRestriction.directive';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    InputRestrictionDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    EditorModule,
    CalendarModule,
    StepsModule,
    CardModule,
    CheckboxModule,
    FieldsetModule,
    SplitterModule,
    ButtonModule,
    FileUploadModule,
    ToastModule,
    HttpClientModule,
    ImageModule,
    DropdownModule,
    TableModule,
    InputNumberModule,
    InputTextModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
