import { Component, Input, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Notations } from 'src/app/models/EMNotations';
import { NotationSelectService } from 'src/app/services/notation-select.service';
import { Color, MovesService } from '../service/moves.service';

@Component({
  selector: 'app-move-input',
  template: `
    <mat-form-field appearance="fill" [ngClass]="{'read-only': readonly}">
      <input
        matInput
        [formControl]="formControl"
        data-automation-id="move-input"
        [readonly]="readonly">

      <mat-error *ngIf="formControl.invalid">
        Bad format <a *ngIf="notationWiki" [href]="notationWiki" target="_blank">(wiki)</a>
      </mat-error>
    </mat-form-field>
  `
})
export class MoveInputComponent implements OnInit {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  @Input() rowIndex!: number
  @Input() color!: Color
  @Input() value!: string
  @Input() readonly!: boolean

  formControl = new FormControl<string>('')
  notationFormat?: RegExp
  notationWiki?: string

  constructor(
    private notationSelect: NotationSelectService,
    private moves: MovesService
  ) {}

  ngOnInit() {
    this.formControl.setValue(this.value)

    this.notationSelect.getSelectedNotation$()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(notation => this.setFieldValidation(notation))

    this.watchInputValue()
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
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
    this.formControl.setValidators([
      this.validateMove(this.notationFormat)
    ])
  }

  private validateMove(formatRe?: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && !formatRe?.test(control.value)
        ? { badFormat: { value: control.value } } : null
    };
  }

  private watchInputValue() {
    this.formControl.statusChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        if (this.formControl.valid) {
          this.moves
            .updateMove(this.rowIndex, this.color, this.formControl.value || '')
        }
      })
  }
}
