import { Component } from '@angular/core';
import { Post, posts} from "../posts";
import {Blog_list_R} from "../hadzen_models";
import {blog_list} from "../blog_list";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  blogs: Blog_list_R[] = blog_list;
}
