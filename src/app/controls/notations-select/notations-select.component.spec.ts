import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotationSelectComponent } from './notation-select.component';

describe('NotationSelectComponent', () => {
  let component: NotationSelectComponent;
  let fixture: ComponentFixture<NotationSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotationSelectComponent]
    });
    fixture = TestBed.createComponent(NotationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
