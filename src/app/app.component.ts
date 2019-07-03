import {Component} from '@angular/core';

@Component({
  selector: 'effects-root',
  template: `
    <div>

      <effects-navbar></effects-navbar>
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {


}
