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
        <td mat-cell *matCellDef="let element" data-automation-id="whites-move">
          <app-move-input></app-move-input>
        </td>
      </ng-container>

      <ng-container matColumnDef="black">
        <th mat-header-cell *matHeaderCellDef>Black</th>
        <td mat-cell *matCellDef="let element" data-automation-id="blacks-move">
          <app-move-input></app-move-input>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
   </table>
  `
})
export class MovesTableComponent {
  displayedColumns = ['move', 'white', 'black'];
  dataSource = [
    { move: 1, white: '', black: '' },
    { move: 2, white: '', black: '' },
  ];
}
