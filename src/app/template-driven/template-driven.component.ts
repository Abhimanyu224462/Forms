import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  save(data:any){
    console.log("Forms Data: ", data.value )
    // console.log("Forms Data: ", data )
  }
}
