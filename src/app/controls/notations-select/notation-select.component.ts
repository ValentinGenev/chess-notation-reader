import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Notations } from 'src/app/models/EMNotations';
import { SelectOption } from 'src/app/models/SelectOption';
import { NotationSelectService } from 'src/app/services/notation-select.service';

@Component({
  selector: 'app-notations-select',
  template: `
    <mat-form-field appearance="fill" class="d-block">
      <mat-label>Choose notation</mat-label>
      <mat-select
        [value]="selectedNotation | async"
        (selectionChange)="changeNotation($event)"
      >
        <mat-option
          *ngFor="let option of options"
          [value]="option.value"
        >{{option.name}}</mat-option>
      </mat-select>
    </mat-form-field>
  `
})
export class NotationSelectComponent {
  options: SelectOption[]
  selectedNotation: Observable<Notations>

  constructor(
    private notationSelection: NotationSelectService
  ) {
    this.options = this.notationSelection.getOptions()
    this.selectedNotation = this.notationSelection.getSelectedNotation()
  }

  changeNotation(option: any) {
    this.notationSelection.setSelectedNotation(option.value)
  }
}
