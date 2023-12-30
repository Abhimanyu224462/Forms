import { Component } from '@angular/core';

@Component({
  selector: 'app-template2way-db',
  templateUrl: './template2way-db.component.html',
  styleUrls: ['./template2way-db.component.css']
})
export class Template2wayDBComponent {
  save(data:any){
    console.log("Forms Data: ", data.value )
    // console.log("Forms Data: ", data )
    console.log("Forms Data ngModel: ", this.twoWayForm )
  }

  twoWayForm:user = new user();

  userObj: user = {
    "fname":"yogita",
    "lname":"deokar",
    "mobile":908090980,
    "mail":"yogi@gmail.com"
  }

  ngOnInit(){

   this.twoWayForm = {...this.userObj} 

  }

}

class user {
  fname!:string;
  lname!:string;
  mobile!:number;
  mail!:string;
}
