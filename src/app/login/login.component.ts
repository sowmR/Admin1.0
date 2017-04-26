import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls:['./login.css']
})
export class Login {
	public form:FormGroup;
  	public email:AbstractControl;
  	public password:AbstractControl;
  	public submitted:boolean = false;

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }

}