import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formuLogin: FormGroup;

  constructor(public fl: FormBuilder) { 

    this.formuLogin = this.fl.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  ingresar() {
    var user = this.formuLogin.value;

    var alumnoJSON = (localStorage.getItem('user'));

    if (alumnoJSON) {
      var alumno = JSON.parse(alumnoJSON);
  
      if (alumno.usuario == user.usuario && alumno.password == user.password) {
        console.log('Éxito');
      } else {
        console.log('error');
      }
    } else {
      console.log('no almacenado');
    }
    
  }

}
