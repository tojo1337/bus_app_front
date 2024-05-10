import { Component, HostListener, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fa3, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { DomService } from '../../services/dom-service/dom.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showMenu: boolean = false;
  
  faBarIcon = faBars;
  faXmarkIcon = faXmark;
  fa3x = fa3;

  innerWidth:number = 0;
  maxWidth:number = 1336;
  minWidth: number = 360;

  constructor(private dom: DomService){  }
  
  ngOnInit(): void {
    this.innerWidth = this.dom.getWindow()?.innerWidth??this.maxWidth;
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  @HostListener("window:resize", ["$event.target.innerWidth"])
  onResize(width: number){
    this.innerWidth = width;
  }
}
