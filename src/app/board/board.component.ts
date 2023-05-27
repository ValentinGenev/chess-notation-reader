import { Component, OnInit } from '@angular/core';
import { NotationSelectService } from '../services/notation-select.service';
import { Notations } from '../models/EMNotations';

@Component({
  selector: 'app-board',
  template: `
    <div class="d-grid gap-sm col-3-auto">
      <app-rank-index></app-rank-index>
      <app-field></app-field>
      <app-rank-index
        [ngClass]="{'hide': !isDescriptive}"
        [isReversed]="true"
      ></app-rank-index>
      <app-file-index class="pos-col-2"></app-file-index>
    </div>
  `
})
export class BoardComponent implements OnInit {
  isDescriptive = false

  constructor(
    private notationSelect: NotationSelectService
  ) {}

  ngOnInit() {
    this.notationSelect.getSelectedNotation$().subscribe(notation => {
      this.isDescriptive = notation === Notations.DESCRIPTIVE
    })
  }
}
