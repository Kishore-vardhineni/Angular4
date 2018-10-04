import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRouting, routingComponent } from './header/approuting.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { WebService } from '../app/shared/webservice';
import { CountryService } from '../app/shared/countryservice';

@NgModule({
  declarations: [
    AppComponent, 
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [WebService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
