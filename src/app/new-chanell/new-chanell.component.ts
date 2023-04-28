import {Component, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-new-chanell',
  templateUrl: './new-chanell.component.html',
  styleUrls: ['./new-chanell.component.css']
})
export class NewChanellComponent {
  name:string|undefined;
  title:string|undefined;
  is_comm:boolean=true;
  owner:number|undefined;
  img:string="assets/Bufotes_oblongus.jpg";

  query = '';
  results: any[]|undefined;
  myFunction() {
    console.log(this.name+' '+this.title+' '+this.img);
  }
}
