import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    NavbarComponent,
    AboutPageComponent,
    PortfolioComponent,
    ContactPageComponent,
    ExperienceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Resume';
}
