import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bus-list',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './bus-list.component.html',
  styleUrl: './bus-list.component.scss'
})
export class BusListComponent {
  
  faArrowIcon = faArrowRight;
  faGreater = faGreaterThan;
  faLesser = faLessThan;

}
