import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router';
>>>>>>> 872004a (actualizacion con compodoc)
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [AppComponent],
=======
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
>>>>>>> 872004a (actualizacion con compodoc)
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have the 'sneakers-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sneakers-app');
=======
  it(`should have as title 'Sneakers'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Sneakers');
>>>>>>> 872004a (actualizacion con compodoc)
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, sneakers-app');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Sneakers');
>>>>>>> 872004a (actualizacion con compodoc)
  });
});
