import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="container">
      <h1>Notation reader</h1>
      <div class='d-grid gap-2 cols-2'>
        <app-board></app-board>
        <app-controls></app-controls>
      </div>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
