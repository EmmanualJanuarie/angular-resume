import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { HighlightedNavItemsDirective } from '../directives/navbar-items/highlighted-nav-items.directive';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { OnclickHomePageDirective } from '../directives/navbar-items/HomePageDir/onclick-home-page.directive';
import { ExperienceComponent } from '../experience/experience.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { NavbarMenuComponent } from '../navbar-menu/navbar-menu.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    HighlightedNavItemsDirective,
    OnclickHomePageDirective,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ExperienceComponent,
    PortfolioComponent,
    NavbarMenuComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
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
