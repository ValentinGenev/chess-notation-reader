import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesTableComponent } from './moves-table.component';

describe('MovesTableComponent', () => {
  let component: MovesTableComponent;
  let fixture: ComponentFixture<MovesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovesTableComponent]
    });
    fixture = TestBed.createComponent(MovesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
