import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-ng-dropdowns';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MultiSelectModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`check multiselect component initiated`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.multiselect instanceof MultiSelectComponent).toEqual(true);
  }));

});
