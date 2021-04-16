import { Component } from '@angular/core';
import {environment as env} from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngPacVer';
  appVersion = env.APP_VERSION;
}
