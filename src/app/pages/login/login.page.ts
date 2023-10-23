import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AutenticarService } from 'src/app/sevices/autenticar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(private autenticarService : AutenticarService ,public fb : FormBuilder,
    private router:Router,public alertController: AlertController,) 
    {
      this.formularioLogin = this.fb.group({
        'usuario': new FormControl ("",Validators.required),
        'password' : new FormControl ( "", Validators.required)
      })
  }

  ngOnInit() {
  }

  ingresar() {
    const usuario = this.formularioLogin.get('usuarioo')?.value;
    const password = this.formularioLogin.get('passwordd')?.value;
    if (this.autenticarService.login(usuario, password)) {
      this.router.navigate(['/asistencia-qr']);

    } else{
      
    }}

}
