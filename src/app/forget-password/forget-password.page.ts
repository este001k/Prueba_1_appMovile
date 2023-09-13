import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  formucambio : FormGroup

  constructor(public fc : FormBuilder,
    public alertController: AlertController) { 
    this.formucambio = this.fc.group({
      'rut': new FormControl("", Validators.required),
      'usuario': new FormControl("", [Validators.required, Validators.maxLength(12)]),
      'password': new FormControl("", [Validators.required, Validators.minLength(7), Validators.maxLength(7)]),

    })
  }

  ngOnInit() {
  }

  async cambiar() {
    var user = this.formucambio.value;

    var alumnoJSON = (localStorage.getItem('user'));

    if (alumnoJSON) {
      var alumno = JSON.parse(alumnoJSON);
  
      if (alumno.usuario == user.usuario && alumno.rut == user.rut) {
        
        alumno.password=user.password;

        localStorage.setItem('user', JSON.stringify(alumno));
        console.log('exisota jugada',alumno.password)
        const alert = await this.alertController.create({
          header: 'La contraseña ha sido cambiada',
          buttons: ['Continuar'],
        });
        await alert.present();
        return;
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Rut o usuario invalidos!',
          buttons: ['Continuar'],
        });
    
        await alert.present();
        return;
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Usuario no existe',
        message: 'Es probable que el usuario no exista...d',
        buttons: ['Continuar'],
      });
  
      await alert.present();
      return;
    }
    
  }

} 
