import { Component, ElementRef, ViewChild } from '@angular/core';
import { HighlightedNavItemsDirective } from '../directives/navbar-items/highlighted-nav-items.directive';
import { HamburgerBarHighlightDirective } from '../directives/navbar-menu/hamburger-bar-highlight.directive';

@Component({
  selector: 'app-navbar-menu',
  standalone: true,
  imports: [
    HighlightedNavItemsDirective,
    HamburgerBarHighlightDirective

  ],
  templateUrl: './navbar-menu.component.html',
  styleUrl: './navbar-menu.component.css'
})
export class NavbarMenuComponent {
  @ViewChild('home') home!: ElementRef; //view for home
  @ViewChild('aboutme') aboutme!: ElementRef; //view for aboutme
  @ViewChild('portfolio') portfolio!: ElementRef; //view for portfolio
  @ViewChild('contactme') contactme!: ElementRef; //view for contact me
  @ViewChild('experience') experience!: ElementRef;//view for experience

  scrollToHomeSection(): void{
    this.home.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAboutmeSection(): void{
    this.aboutme.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToPortfolioSection(): void{
    this.portfolio.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContactSection(): void{
    this.contactme.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToExperinceSection(): void{
    this.experience.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}

