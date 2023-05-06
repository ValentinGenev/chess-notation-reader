import { Injectable } from '@angular/core';
import { Notations } from '../models/EMNotations';
import { BehaviorSubject } from 'rxjs';
import { SelectOption } from '../models/SelectOption';

@Injectable({
  providedIn: 'root'
})
export class NotationSelectService {
  private options: SelectOption[] = [
    {
      value: Notations.ALGEBRAIC,
      name: 'Algebraic (standard)'
    },
    {
      value: Notations.DESCRIPTIVE,
      name: 'Descriptive'
    }
  ]
  private selectedNotation =
    new BehaviorSubject<Notations>(this.options[0].value)

  constructor() { }

  getOptions() {
    return this.options
  }

  setSelectedNotation(notation: Notations) {
    this.selectedNotation.next(notation)
  }

  getSelectedNotation() {
    return this.selectedNotation.asObservable()
  }
}
