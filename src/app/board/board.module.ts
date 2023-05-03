import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldComponent } from './field/field.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [
    FieldComponent,
    TileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FieldComponent
  ]
})
export class BoardModule { }
