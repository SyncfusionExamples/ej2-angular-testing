# Testing Essential JS2 Angular Component using CLI

In this project is demo application to test Essential JS2 Angular MultiSelect component.

Here, We have created multiselect component in `app.component.html` file.

```html
<ej-multiselect #multiselectelement id='multiselectelement' [dataSource]='data' [placeholder]='placeholder'>
</ej-multiselect>
```
Now, Can test the multiselect component has been initiated or not. You may refer the `app.component.ts` that i have get instance of multiselect element so that i can use that to check entire component

Angular provides the TestBed to check angular component.[Testing Angular component](https://angular.io/guide/testing#test-a-component)

Then i added the spec to test multiselect component has been initiated or not. You can refer the `app.component.spec.ts` file for TestBed testing with Jasmine.

```ts
it(`check multiselect component initiated`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.multiselect instanceof MultiSelectComponent).toEqual(true);
  }));
```

# Running and Testing Application

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
