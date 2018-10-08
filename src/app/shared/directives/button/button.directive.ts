import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit {
  @Input() appButton: string;

  @HostBinding("class.button")
  button: boolean = true;

  @HostBinding("class.button--full")
  buttonFull: boolean;

  @HostBinding("class.button--submit")
  buttonSubmit: boolean;

  ngOnInit(): void {
    this.buttonFull = this.appButton === 'full';
    this.buttonSubmit = this.appButton === 'submit';
  }

}
