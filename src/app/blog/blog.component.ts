import { Component, OnInit } from '@angular/core';
import { IPost } from '../interafaces';
import { IForm } from '../interafaces/blog.interace';
import { PostService } from '../services';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  
  public posts: IPost[] = [];

  form: IForm = {
    id: 0,
    title:"add text",
    body:"add text"
  }

  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this._postService
      .getPosts()
      .subscribe((posts) => (this.posts = posts.slice(0,3)));
  }

  save():void{

    console.log(JSON.stringify(this.form))
    const newId = this.form.id
    const newTitle = this.form.title
    const newBody = this.form.body
    this.posts.push({id: newId, title: newTitle, body:newBody})
    this.form.id = 0,
    this.form.title = "",
    this.form.body = ""
    alert("Message Sent Succesfully!!")
  }
}
