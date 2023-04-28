import { Component } from '@angular/core';
import {Channel_CRUD} from "../hadzen_models";
import {chanell_list} from "../chanell";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  chanells:Channel_CRUD [] = chanell_list;

  myFunction() {
    console.log(';jgf');
  }

}
