import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appOnclickHomePage]',
  exportAs:'HomePg',
  standalone: true
})
export class OnclickHomePageDirective {

  constructor() { }

  
 @Input('homePage') 
 isButtonToggled = false;

 @Output()
 toggleButton = new EventEmitter();

 @HostListener('click', ['$event'])
  onClick($event:any){
    console.log($event);
    this.isButtonToggled = true;
    this.toggleButton.emit(this.isButtonToggled);
  }

  @HostBinding('class.homePage-nav-item')
  get cssClasses(){
    return this.isButtonToggled;
  }

}
