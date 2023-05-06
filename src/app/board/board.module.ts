import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldComponent } from './field/field.component';
import { TileComponent } from './tile/tile.component';
import { BoardComponent } from './board.component';
import { RankIndexComponent } from './rank-index/rank-index.component';
import { FileIndexComponent } from './file-index/file-index.component';

@NgModule({
  declarations: [
    BoardComponent,
    FieldComponent,
    TileComponent,
    RankIndexComponent,
    FileIndexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
