import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent {
  userRegForm!:FormGroup

  constructor(private fb:FormBuilder){
  
  }
  
    ngOnInit(){
  
     this.userRegForm = this.fb.group({
        firstName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
        lastName:['',[]],
        mobile:['',[Validators.required]],
        email:['',[Validators.required]],
        address:this.fb.group({
          street1:['',[Validators.required]],
          city:['',[]],
          state:['',[]],
          pincode:['',[]]
        })
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
