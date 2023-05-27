import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Color {
  WHITE = 'white',
  BLACK = 'black'
}

export type Move = {
  white: string,
  black: string
}

@Injectable({
  providedIn: 'root'
})
export class MovesService {
  private moves: Move[] = [{ white: 'e3', black: 'e3' }]
  private moves$ = new BehaviorSubject<Move[]>(this.moves)

  add() {
    this.moves.push({ white: '', black: '' })
    this.moves$.next(this.moves)
  }

  getMoves$() {
    return this.moves$.asObservable()
  }

  removeRowsFrom(index: number) {
    this.moves = index > 0 ?
      this.moves.slice(0, index) : [{ white: '', black: '' }]
    this.moves$.next(this.moves)
  }

  updateMove(index: number, color: Color, value: string) {
    this.moves[index][color] = value
    this.moves$.next(this.moves)
  }
}
