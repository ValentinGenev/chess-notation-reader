import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ControlsComponent } from './controls.component';
import { NotationSelectComponent } from './notations-select/notation-select.component';
import { MovesTableComponent } from './moves-table/moves-table.component';
import { MoveInputComponent } from './moves-table/move-input/move-input.component';

@NgModule({
  declarations: [
    ControlsComponent,
    NotationSelectComponent,
    MovesTableComponent,
    MoveInputComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    ControlsComponent
  ]
})
export class ControlsModule { }
