import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'e-commerce-app'`, () => {
    expect(component.title).toEqual('e-commerce-app');
  });

  describe('closeMenu', () => {
    it(`should close the side menu`, () => {
      component.closeMenu(false);
      expect(component.showMenu).toEqual(false);
    });
  });

  describe('toggleSideMenu', () => {
    it(`should toggle the side menu`, () => {
      component.showMenu = true;
      component.toggleSideMenu();
      expect(component.showMenu).toEqual(false);
    });
  });
});
