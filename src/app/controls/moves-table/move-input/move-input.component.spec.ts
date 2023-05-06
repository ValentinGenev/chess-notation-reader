import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveInputComponent } from './move-input.component';

describe('MoveInputComponent', () => {
  let component: MoveInputComponent;
  let fixture: ComponentFixture<MoveInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoveInputComponent]
    });
    fixture = TestBed.createComponent(MoveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
