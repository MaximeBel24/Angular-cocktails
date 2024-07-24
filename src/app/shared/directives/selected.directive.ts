import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]',
  standalone: true
})
export class SelectedDirective implements OnChanges{

  @Input() public appSelected?: boolean;
  @HostBinding("style.backgroundColor") private backgroundColor: string;
  @HostBinding("style.color") private color: string;
  @HostBinding("style.fontWeight") private fontWeight: string;

  ngOnChanges(changes: SimpleChanges): void {
    if(this.appSelected) {
      this.backgroundColor = "var(--primary)";
      this.color = "white";
      this.fontWeight = "500";
    } else {
      this.backgroundColor = "";
      this.fontWeight = "";
      this.color = "";
    }
  }
  
  constructor() {    
    this.appSelected = false;
    this.backgroundColor = 'white';
    this.fontWeight = '400';
    this.color = 'var(--text-regular)';
  }

}
