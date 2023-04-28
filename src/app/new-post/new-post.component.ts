import { Component } from '@angular/core';
import {Channel_CRUD} from "../hadzen_models";
import {chanell_list} from "../chanell";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  name:string|undefined;
  text_in:string|undefined;
  date:Date=new Date();
  img:string="assets/Bufotes_oblongus.jpg";

  creator:string|undefined;

  ch:number|undefined;


  chanells:Channel_CRUD [] = chanell_list;

  myFunction() {
    console.log(this.name+' '+this.text_in+' '+this.img);
  }


}
