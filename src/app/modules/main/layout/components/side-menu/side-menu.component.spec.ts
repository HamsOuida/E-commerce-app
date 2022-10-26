import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SideMenuComponent } from './side-menu.component';

describe('SideMenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SideMenuComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SideMenuComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
