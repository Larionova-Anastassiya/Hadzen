import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import {Blog_Detail_R, Blog_list_R} from "../hadzen_models";
import {blog_detail} from "../blog_detail";
import {blog_list} from "../blog_list";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  myId: number | undefined;

  blog:Blog_Detail_R=blog_detail[0];
  blogs: Blog_list_R[] = blog_list;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => parseInt(params['postId'], 0))
    ).subscribe(id => {
      this.myId = id;
      this.blog=blog_detail[id];
    });
  }
}
