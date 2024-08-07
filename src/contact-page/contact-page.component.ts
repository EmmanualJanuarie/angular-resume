import { AfterViewInit, Component, ElementRef, ViewChild, Renderer2} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements AfterViewInit{

  @ViewChild(NavbarComponent)
  navbar: NavbarComponent|undefined;

  constructor(private renderer: Renderer2, private elementRef: ElementRef){}

  ngAfterViewInit(){
   
  }

}



