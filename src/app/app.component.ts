import { Component, OnInit } from '@angular/core';

import { ReadService } from './services/notations/descriptive/read.service';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <app-field></app-field>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private descriptiveNotationRead: ReadService
  ) {}

  ngOnInit() {
    this.descriptiveNotationRead.getGames().subscribe(result => {
      console.log('---------------', result)
    })
  }
}
