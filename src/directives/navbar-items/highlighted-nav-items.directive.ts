import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlightedNavItems]',
  exportAs: 'NavItem_hl',
  standalone: true
})
export class HighlightedNavItemsDirective {

  constructor() {
    console.log("Directive is Active...");
  }

  @Input('highlightedNavItem')
  isHighlighted = false;

  @Output()
  toggleHighlighted = new EventEmitter();

  //when mouse icon is above item
  @HostListener('mouseover', ['$event'])
  mouseOver($event:any){
    console.log($event)
    this.isHighlighted = true;
    this.toggleHighlighted.emit(this.isHighlighted);
  }

  //when mouse icon leaves item
  @HostListener('mouseleave')
  mouseLeave(){
    this.isHighlighted = false;
    this.toggleHighlighted.emit(this.isHighlighted);
  }

  //getting css code to apply to html element
  @HostBinding('class.Highlighted-nav-item')
  get cssClasses(){
    return this.isHighlighted;
  }
}
