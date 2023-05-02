import { Component } from '@angular/core';
import {Blog_list_R, Channel_CRUD} from "../hadzen_models";
import {blog_list} from "../blog_list";
import {chanell_list} from "../chanell";

@Component({
  selector: 'app-short-channels',
  templateUrl: './short-channels.component.html',
  styleUrls: ['./short-channels.component.css']
})
export class ShortChannelsComponent {
  chanells:Channel_CRUD [] = chanell_list;
}
