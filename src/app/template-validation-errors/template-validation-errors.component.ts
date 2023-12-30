import { Component } from '@angular/core';

@Component({
  selector: 'app-template-validation-errors',
  templateUrl: './template-validation-errors.component.html',
  styleUrls: ['./template-validation-errors.component.css']
})
export class TemplateValidationErrorsComponent {

  save(data:any){
    console.log("Forms Data: ", data.value )
    // console.log("Forms Data: ", data )
    console.log("Forms Data ngModel: ", this.twoWayForm )
  }

  twoWayForm:user = new user();

}

class user {
  fname!:string;
  lname!:string;
  mobile!:number;
  mail!:string;
}


