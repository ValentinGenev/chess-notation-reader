import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="container">
      <h1>Notation reader</h1>
      <div class='d-grid cols-2'>
        <app-field></app-field>
        <app-controls></app-controls>
      </div>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
