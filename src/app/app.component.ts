import { Component } from '@angular/core';
import { environment } from '../environments/environment.school-secondary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hello Angluar';

  // for environment Schools
  mainDesc = environment.mainDecs;
}
