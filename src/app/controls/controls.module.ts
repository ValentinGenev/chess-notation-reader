import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ControlsComponent } from './controls.component';
import { NotationSelectComponent } from './notations-select/notation-select.component';
import { MovesTableComponent } from './moves-tables/moves-table.component';

@NgModule({
  declarations: [
    ControlsComponent,
    NotationSelectComponent,
    MovesTableComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule
  ],
  exports: [
    ControlsComponent
  ]
})
export class ControlsModule { }
