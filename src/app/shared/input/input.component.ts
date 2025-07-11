import { Component, forwardRef, Input, input, signal } from '@angular/core';
import {NG_VALUE_ACCESSOR,ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(()=>InputComponent)
  }]
})
export class InputComponent implements ControlValueAccessor{
type = input.required<string>();
placeholder = input('');
@Input() errorStateMatcher: any;
_value = signal('');

@Input() set value(val: string){
  this._value.set(val);
}

onChange=(val: string)=>{
  this._value.set(val);
}
onTouch=()=>{}

registerOnChange(fn: any): void {
  this.onChange = fn;
}

registerOnTouched(fn: any): void {
  this.onTouch = fn;
}

writeValue(obj: any): void {
  this.onChange(obj);
}
onInput(e: Event){
  const el = e.target as HTMLInputElement;
  this.onChange(el.value);
}
}
