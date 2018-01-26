import { Component, ViewChild } from '@angular/core';
import { MultiSelectComponent } from '@syncfusion/ej2-ng-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // defined the array of data
  public data: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
  // set placeholder to MultiSelect input element
  public placeholder: string = 'Select games';
  // instance of multiselect component
  @ViewChild('multiselectelement') multiselect: MultiSelectComponent;


}
