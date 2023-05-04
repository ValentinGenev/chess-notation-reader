import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {
    console.log('---------------', 'feels nice man')
  }
}
