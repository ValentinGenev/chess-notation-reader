import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rank-index',
  template: `
    <ol
      [ngClass]="{
        'rank-index': true,
        'd-flex': true,
        'flex-column': true,
        'flex-column-reverse': isReversed
      }"
    >
      <li *ngFor="let index of INDEXES">{{index}}</li>
    </ol>
  `,
  styleUrls: ['./rank-index.component.scss']
})
export class RankIndexComponent {
  @Input() isReversed?: boolean

  INDEXES = [8, 7, 6, 5, 4, 3, 2, 1]
}
