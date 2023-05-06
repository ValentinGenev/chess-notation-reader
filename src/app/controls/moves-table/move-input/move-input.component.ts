import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Notations } from 'src/app/models/EMNotations';
import { NotationSelectService } from 'src/app/services/notation-select.service';

@Component({
  selector: 'app-move-input',
  template: `
    <mat-form-field appearance="fill">
      <input
        matInput
        [formControl]="moveFormControl"
        data-automation-id="move-input"
      >
      <mat-error *ngIf="moveFormControl.valid">
        Bad format <a *ngIf="notationWiki" [href]="notationWiki" target="_blank">(wiki)</a>
      </mat-error>
    </mat-form-field>
  `
})
export class MoveInputComponent implements OnInit {
  @Input() value!: string

  moveFormControl = new FormControl<string>(this.value)
  isDisabled = false
  notationFormat?: RegExp
  notationWiki?: string

  constructor(
    private notationSelect: NotationSelectService
  ) {}

  ngOnInit() {
    if (this.value) {
      this.moveFormControl.setValue(this.value)
      this.moveFormControl.disable()
    } else {
      this.notationSelect.getSelectedNotation()
        .subscribe(notation => this.setFieldValidation(notation))
    }
  }

  private setFieldValidation(notation: Notations) {
    switch (notation) {
      case Notations.ALGEBRAIC:
      default:
        // FIXME: the checks are not working (the + sign doesn't match)
        this.notationFormat = /(\b[O0]-[O0]-[O0]\b)|(\b[O0]-[O0]\b)|(\b[RNBQK]?[1-8]?[a-h]?[x]?[a-h]{1}[1-8]{1}[+#=/]?[RNBQK]?\b)/g
        this.notationWiki = 'https://en.wikipedia.org/wiki/Algebraic_notation_(chess)'
        break

      case Notations.DESCRIPTIVE:
        // TODO: add the checks (' ch')
        this.notationFormat = /(\b[O0]-[O0]-[O0]\b)|(\b[O0]-[O0]\b)|(\b[RNBQKP]{1}[RNBQKP]?[-x]?[RNBQKP]{1}[RNBQKP]?[1-8]?[=]?[RNBQK]?\b)/g
        this.notationWiki = 'https://en.wikipedia.org/wiki/Descriptive_notation'
        break
    }
    this.moveFormControl.setValidators([
      this.moveValidator(this.notationFormat)
    ])
  }

  private moveValidator(formatRe?: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && !formatRe?.test(control.value)
        ? { badFormat: { value: control.value } } : null
    };
  }
}
