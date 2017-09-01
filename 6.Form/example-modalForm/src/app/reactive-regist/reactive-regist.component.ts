import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {equalValidator, mobileValidator, passwordASyncValidator} from '../validator/valiators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel: FormGroup;
 /* mobileValidator(control: FormControl): any {
    const myreg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$/;
    const valid = myreg.test(control.value);
    console.log('check result' + valid);
    return valid ? null : {mobile: true};
  }

  equalValidator(group: FormGroup): any {
    const password: FormControl = group.get('password') as FormControl;
    const pconfirm: FormControl = group.get('pconfirm') as FormControl;
    const valid: boolean = (password.value === pconfirm.value);
    console.log('password check' + valid);
    return valid ? null : {equal: true};
  }*/

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [ Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator],
      passwordsGroup: fb.group({
        password: ['', [ Validators.minLength(6), passwordASyncValidator]],
        pconfirm: ['']
      }, { validator: equalValidator})
    });
  }
 onSubmit() {
    const isVaild: boolean = this.formModel.get('username').valid;
    console.log(isVaild);
    const error: any = this.formModel.get('username').errors;
    console.log(error);
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
    }

  ngOnInit() {
  }

}
