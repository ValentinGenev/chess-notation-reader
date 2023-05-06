import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankIndexComponent } from './rank-index.component';

describe('RankIndexComponent', () => {
  let component: RankIndexComponent;
  let fixture: ComponentFixture<RankIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankIndexComponent]
    });
    fixture = TestBed.createComponent(RankIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
