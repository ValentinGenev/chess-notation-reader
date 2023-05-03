import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  template: `
    <div
      [ngClass]="{tileName, 'odd-rank': isOddRank, 'odd-file': isOddFile}"
      [attr.data-rank]="rank"
      [attr.data-file]="file"
      [attr.data-automation-id]="tileName"
    ></div>
  `,
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() rank!: number
  @Input() file!: number
  tileName?: string
  isOddRank?: boolean
  isOddFile?: boolean

  ngOnInit() {
    this.tileName = `tile-${this.rank}-${this.file}`
    this.isOddRank = this.rank % 2 !== 0
    this.isOddFile = this.file % 2 !== 0
  }
}
