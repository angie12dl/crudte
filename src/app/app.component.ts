import { Component } from '@angular/core';
import { Post } from './crud/interfaces/postt.component';
import Swal from 'sweetalert2';

import 'sweetalert2/src/sweetalert2.scss'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {


  posts: Post[] = [];
  newPost: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 0,
  
  }

  constructor() {
    this.getPost()
  }

  

  async getPost() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
    // .then((json) => console.log(json));
    this.posts = res;

  }


  update(id: any) {
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
      // Swal.fire({
      //   title: 'Do you want to save the changes?',
      //   showDenyButton: true,
      //   showCancelButton: true,
      //   confirmButtonText: 'Save',
      //   denyButtonText: `Don't save`,
      // }).then((result) => {
      //   /* Read more about isConfirmed, isDenied below */
      //   if (result.isConfirmed) {
      //     Swal.fire('Saved!', '', 'success')
      //   } else if (result.isDenied) {
      //     Swal.fire('Changes are not saved', '', 'info')
      //   }
      })
      


    //this.posts = this.posts.filter((post: any)) => 

  }

  borrar(id: number) {
    Swal.fire({
      title: '¿Estas seguro de querer eliminarlo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'DELETE',
        });
        this.posts = this.posts.filter((post: any) => post.id !== id)

        Swal.fire(
          'eliminado!'
        )

      }
    })

  }

  



  // Swal.fire({
  //   title: 'Error!',
  //   text: '¿Quieres continuar?',
  //   icon: 'error',
  //   confirmButtonText: 'Cool'
  // })



}
