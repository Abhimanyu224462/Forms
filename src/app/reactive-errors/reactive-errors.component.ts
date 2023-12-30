import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-errors',
  templateUrl: './reactive-errors.component.html',
  styleUrls: ['./reactive-errors.component.css']
})
export class ReactiveErrorsComponent {
  userRegForm!:FormGroup

  ngOnInit(){
  
    this.userRegForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(40)]),
      lastName: new FormControl('',[]),
      mobile: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required])
    })
  
  }
  
  submit(){
    console.log("Data from the Form", this.userRegForm.value)
    console.log("Entire Form Data", this.userRegForm)
  }

  reset(){
    this.userRegForm.reset()
  }

  get firstName(){
    return this.userRegForm.get('firstName')
  }

  

  setData(){
   var backendObj:any = {
      "firstName":"Suphiana",
      "lastName":"anna",
      "mobile":"82828282",
      "email": "email@email.com"
    }

    this.userRegForm.setValue(backendObj)
  }


  patchData(){
    var backendObj:any = {
      "firstName":"Suphiana",
      "lastName":"anna",
      "Mobile":"82828282",
      "email": "email@email.com"
    }

    this.userRegForm.patchValue(backendObj)
  }
}
