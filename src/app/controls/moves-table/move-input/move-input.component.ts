import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-move-input',
  template: `
    <mat-form-field appearance="fill">
      <input
        matInput
        [formControl]="moveFormControl"
        data-automation-id="move-input"
      >
    </mat-form-field>
  `
})
export class MoveInputComponent {
  @Input() value?: string

  moveFormControl = new FormControl(this.value || '', [Validators.required])

  // TODO: add custom validation method
}
