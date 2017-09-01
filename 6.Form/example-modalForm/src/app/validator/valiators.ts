import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

export  function mobileValidator(control: FormControl): any {
  const myreg = /^(((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8})$/;
  const valid = myreg.test(control.value);
  console.log('check result' + valid);
  return valid ? null : {mobile: true};
}

 export function equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const pconfirm: FormControl = group.get('pconfirm') as FormControl;
  const valid: boolean = (password.value === pconfirm.value);
  console.log('password check' + valid);
  return valid ? null : {equal: {desc: 'password and pconfirm are not same'}};
}

export function passwordASyncValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const pconfirm: FormControl = group.get('pconfirm') as FormControl;
  const valid: boolean = (password.value === pconfirm.value);
  console.log('password check' + valid);
  return valid ? null : {equal: {desc: 'password and pconfirm are not same'}};
}
