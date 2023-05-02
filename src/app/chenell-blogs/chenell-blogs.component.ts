import {Component, OnInit} from '@angular/core';
import {Blog_list_R, Channel_CRUD} from "../hadzen_models";
import {blog_list} from "../blog_list";
import {chanell_list} from "../chanell";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {blog_detail} from "../blog_detail";

@Component({
  selector: 'app-chenell-blogs',
  templateUrl: './chenell-blogs.component.html',
  styleUrls: ['./chenell-blogs.component.css']
})
export class ChenellBlogsComponent implements OnInit{
  blogs: Blog_list_R[] = blog_list;

  chanell:Channel_CRUD=chanell_list[0];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => parseInt(params['postId'], 0))
    ).subscribe(id => {
      this.chanell=chanell_list[id-1];
    });
  }

}
