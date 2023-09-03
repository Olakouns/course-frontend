import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutCharComponent } from './doughnut-char.component';

describe('DoughnutCharComponent', () => {
  let component: DoughnutCharComponent;
  let fixture: ComponentFixture<DoughnutCharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoughnutCharComponent]
    });
    fixture = TestBed.createComponent(DoughnutCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
