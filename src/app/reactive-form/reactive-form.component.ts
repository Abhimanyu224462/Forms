import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

userRegForm!:FormGroup

ngOnInit(){

  this.userRegForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(40),Validators.pattern('[a-zA-Z]{0-50}')]),
    lastName: new FormControl('',[]),
    mobile: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required])
  })

}

submit(){
  console.log("Data from the Form", this.userRegForm.value)
  console.log("Entire Form Data", this.userRegForm)
}

}
