import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {QueryApi} from "./commonservice/request/QueryApi";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";



import { SendmailComponent } from './sendmail/sendmail.component';

@NgModule({
  declarations: [
    AppComponent,
    SendmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QueryApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
