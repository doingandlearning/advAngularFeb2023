import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiComponent } from './swapi.component';

describe('SwapiComponent', () => {
  let component: SwapiComponent;
  let fixture: ComponentFixture<SwapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
