import { Component } from '@angular/core';

@Component({
  selector: 'app-moves-tables',
  templateUrl: 'moves-table.component.html',
  styleUrls: ['moves-table.component.scss']
})
export class MovesTableComponent {
  // TODO: add delete button
  displayedColumns = ['move', 'white', 'black'];
  dataSource = [
    { move: 1, white: 'e4', black: 'e5' },
    { move: 2, white: '', black: '' }
  ];
}
