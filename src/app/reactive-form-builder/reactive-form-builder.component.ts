import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css']
})
export class ReactiveFormBuilderComponent {
userRegForm!:FormGroup

constructor(private fb:FormBuilder){

}

  ngOnInit(){

   this.userRegForm = this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      lastName:['',[]],
      mobile:['',[Validators.required]],
      email:['',[Validators.required]]
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
