import { Component, OnInit } from '@angular/core';
import { Color, Move, MovesService } from './service/moves.service';

@Component({
  selector: 'app-moves-tables',
  templateUrl: 'moves-table.component.html',
  styleUrls: ['moves-table.component.scss']
})
export class MovesTableComponent implements OnInit {
  WHITE = Color.WHITE
  BLACK = Color.BLACK
  moves: Move[] = []
  isToBeRemovedArray: boolean[] = []

  constructor(
    private movesService: MovesService
  ) {}

  ngOnInit() {
    this.movesService.getMoves$().subscribe(m => this.moves = m)
  }

  addRow() {
    this.movesService.add()
  }

  removeRowsFrom(index: number) {
    this.movesService.removeRowsFrom(index)
  }

  isReadonly(index: number) {
    return index !== this.moves.length - 1
  }

  isToBeRemoved(index: number, show: boolean) {
    for (let i = index; i < this.moves.length; i++) {
      this.isToBeRemovedArray[i] = show
    }
  }

  canAddRow() {
    const lastMoves = this.moves[this.moves.length - 1]
    return lastMoves.white !== '' && lastMoves.black !== ''
  }
}
