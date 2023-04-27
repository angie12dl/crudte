import { Component } from '@angular/core';

import Swal from 'sweetalert2';

import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor() {

   }



   create() {
    // fetch(`https://jsonplaceholder.typicode.com/agrega/${this.aggTag}`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     //id: ,
    //     title: (''),
    //     body: (''),
    //     userId: 1,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // }) 

    // this.posts= this.posts.filter((post: any) => post.aggTag!== gg)

    // .then((response) => response.json());
    // .then((json) => console.log(json));
  }



  aggTag( ) {
    const val1 = Swal.fire({
      title: 'Agrega el ID',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Agregado',
        })
      }
    });
    


 
 
    const val2 = Swal.fire({
      title: 'Agrega el titulo',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Hecho'
        })
      }
    });




    const val3 = Swal.fire({
      title: 'Agrega una descripción al post',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Muy bien!'
        })
      }
    });




    const val4 = Swal.fire({
      title: 'Agrega un ID al autor',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Agregado'
        })
      }
    })
     
    //  console.log(newTag);
}
}
