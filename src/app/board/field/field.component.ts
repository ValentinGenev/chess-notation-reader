import { Component } from '@angular/core';

@Component({
  selector: 'app-field',
  template: `
    <div class="board">
      <div
        *ngFor="let rank of ranks; let y = index"
        [ngClass]="'rank-' + y"
        [attr.data-automation-id]="'rank-' + y"
      >
        <app-tile
          *ngFor="let file of files; let x = index"
          [rank]="y"
          [file]="x"
        ></app-tile>
      </div>
    </div>
  `,
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  RANKS_COUNT = 8
  FILES_COUNT = 8
  ranks = [].constructor(this.RANKS_COUNT)
  files = [].constructor(this.FILES_COUNT)
}
