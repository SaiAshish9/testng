import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}

  // lifecylce hooks -> OnInit OnChanges DoCheck AfterContentInit

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (err) => {
        alert('An unexpected error occurred');
        console.log(err);
      }
    );
  }

  // constructor should be light-weight so we shouldn't perform heavy operations inside them

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value.length > 0 &&
      this.service.createPost(post).subscribe(
        (res) => {
          post['id'] = res['id'];
          this.posts.splice(0, 0, post);
        },
        (err) => {
          if (err.status === 400) {
            // this.form.setErrors(err.json())
          } else alert('An unexpected error occurred');
          console.log(err);
        }
      );
    input.value = '';
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        alert('An unexpected error occurred');
        console.log(err);
      }
    );
  }

  deletePost(post) {
    this.service.deletePost(post).subscribe(
      (res) => {
        // if (Object.keys(res).length !== 0) {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        // } else {
        //   alert('This post has been deleted');
        //   // throw new Error('');
        // }
      },
      (err: Response) => {
        if (err.status === 404) alert('This post has been deleted');
        else alert('An unexpected error occurred');
        console.log(err);
      }
    );
  }
}
