import { Component, OnInit } from '@angular/core';
import { Notations } from 'src/app/models/EMNotations';
import { NotationSelectService } from 'src/app/services/notation-select.service';

@Component({
  selector: 'app-file-index',
  template: `
    <ol class="file-index d-flex">
      <li *ngFor="let index of indexes">{{index}}</li>
    </ol>
  `,
  styleUrls: ['./file-index.component.scss']
})
export class FileIndexComponent implements OnInit {
  indexes:string[] = []

  constructor(
    private notationSelect: NotationSelectService
  ) {}

  ngOnInit() {
    this.notationSelect.getSelectedNotation$().subscribe(notation => {
      this.indexes = notation === Notations.DESCRIPTIVE
        ? ['QR', 'QN', 'QB', 'Q', 'K', 'KB', 'KN', 'KR']
        : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    })
  }
}
