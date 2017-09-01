import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {from} from 'rxjs/observable/from';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mobileValid= true;
  mobileUntounched= true;

  onMobileInput(form: NgForm) {
    if (form) {
     this.mobileValid = form.form.get('mobile').valid;
     this.mobileUntounched = form.form.get('mobile').untouched;
    }
  }

  OnSubmit( value: any, valid: boolean) {
    console.log(valid);
  console.log(value);
}

}
