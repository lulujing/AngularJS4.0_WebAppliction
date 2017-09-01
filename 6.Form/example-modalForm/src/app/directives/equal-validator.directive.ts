import { Directive } from '@angular/core';
import {equalValidator} from '../validator/valiators';
import {NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appEqualValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: equalValidator, multi: true}]
})
export class EqualValidatorDirective {

  constructor() { }

}
