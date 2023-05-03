import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadService {
  private GAMES_DIR = '../assets/notations/descriptive'

  constructor(
    private http: HttpClient
  ) {}

  getGames() {
    // TODO: create a REST interface that will also handle the errors
    return this.http.get(this.GAMES_DIR + '/game-1.csv', {
      responseType: 'text'
    })
  }
}
