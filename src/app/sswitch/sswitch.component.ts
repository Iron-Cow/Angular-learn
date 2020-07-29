import {Component, forwardRef, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

// own ngModel creation
const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SswitchComponent),
  multi: true
};

@Component({
  selector: 'app-sswitch',
  templateUrl: './sswitch.component.html',
  styleUrls: ['./sswitch.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class SswitchComponent implements ControlValueAccessor {
  state = 'on';

  setState(state: string): void{
    this.state = state;

    this.onChange(this.state);
  }

  private onChange = (value: any) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(state: any): void {
    this.state = state;
  }


}
