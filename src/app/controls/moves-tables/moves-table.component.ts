import { Component } from '@angular/core';

@Component({
  selector: 'app-moves-tables',
  template: `
    <table mat-table [dataSource]="dataSource">
      <ng-container matColumnDef="move">
        <th mat-header-cell *matHeaderCellDef>Move</th>
        <td mat-cell *matCellDef="let element">{{element. move}}</td>
      </ng-container>

      <ng-container matColumnDef="white">
        <th mat-header-cell *matHeaderCellDef>White</th>
        <td mat-cell *matCellDef="let element">{{element.white}}</td>
      </ng-container>

      <ng-container matColumnDef="black">
        <th mat-header-cell *matHeaderCellDef>Black</th>
        <td mat-cell *matCellDef="let element">{{element.black}}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
   </table>
  `
})
export class MovesTableComponent {
  displayedColumns = ['move', 'white', 'black'];
  dataSource = [
    { move: 1, white: 'Hydrogen', black: 'Test' },
    { move: 2, white: 'Helium', black: 'Test' },
    { move: 3, white: 'Lithium', black: 'Test' },
    { move: 4, white: 'Beryllium', black: 'Test' },
    { move: 5, white: 'Boron', black: 'Test' },
    { move: 6, white: 'Carbon', black: 'Test' },
    { move: 7, white: 'Nitrogen', black: 'Test' },
    { move: 8, white: 'Oxygen', black: 'Test' },
    { move: 9, white: 'Fluorine', black: 'Test' },
    { move: 10, white: 'Neon', black: 'Test' },
  ];
}
