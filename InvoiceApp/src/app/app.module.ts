import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ShowInvComponent } from './invoice/show-inv/show-inv.component';

import { AddEditInvComponent } from './invoice/add-edit-inv/add-edit-inv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { SharedService } from "./shared.service";

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    ShowInvComponent,
    AddEditInvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
