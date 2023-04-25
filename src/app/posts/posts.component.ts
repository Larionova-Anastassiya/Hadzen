import { Component } from '@angular/core';
import { Post, posts} from "../posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[] = posts;
}
