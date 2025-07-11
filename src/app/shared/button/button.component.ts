import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  disabled = input('');
  @Output() click = new EventEmitter();

  onClick(){
    this.click.emit();
  }
}
