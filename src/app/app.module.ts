import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { ServiceService } from './service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ShowComponent } from './information/show/show.component';
import { SearchComponent } from './information/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    ShowComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
