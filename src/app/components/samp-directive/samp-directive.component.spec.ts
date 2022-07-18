import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampDirectiveComponent } from './samp-directive.component';

describe('SampDirectiveComponent', () => {
  let component: SampDirectiveComponent;
  let fixture: ComponentFixture<SampDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
