import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MultiSelectAllModule } from '@syncfusion/ej2-ng-dropdowns';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MultiSelectAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
