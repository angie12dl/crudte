import { Component } from '@angular/core';
import { identity } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 

  posts: any;


  constructor () {
    this.getPost()
  }



  async getPost ( ){
   let res = await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  // .then((json) => console.log(json));
  this.posts= res;

  }

  create ( ){
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.aggTag}`, {
    method: 'POST',
    body: JSON.stringify({
    //id: ,
    title: (''),
    body: (''),
    userId: 1,
  }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  //this.posts= this.posts.filter((post: any) => post.aggTag!== id)

  //.then((response) => response.json());
  // .then((json) => console.log(json));
  }

  update (id: any){
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  this.posts= this.posts.filter((post: any) => post.gg!== id)
  


  //  this.posts = this.posts.filter((post: any)) => 

  }

  borrar(id: number) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
  console.log('Se eliminó el producto en el ID : ', id);
  this.posts= this.posts.filter((post: any) => post.id!== id)
  }

  aggTag ( newTag: string) {
    console.log(newTag);
  }
  
 }

