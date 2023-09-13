import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  formuRegistro : FormGroup

  constructor(public fr: FormBuilder
    ,public alertController: AlertController) { 

    this.formuRegistro = this.fr.group({
      'rut': new FormControl("", Validators.required),
      'usuario': new FormControl("", [Validators.required, Validators.maxLength(12)]),
      'password': new FormControl("", [Validators.required, Validators.minLength(7), Validators.maxLength(7)]),
      'nombre': new FormControl("", [Validators.required, Validators.maxLength(12)]),
      'apellido': new FormControl("", [Validators.required, Validators.maxLength(12)]),
      'carrera': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }


  async save(){
    const guardar = this.formuRegistro.value;
    
    
    if (this.formuRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos no llenados',
        message: 'Recuerda los datos deben tener 12 caracteres en usuario,nombre,apellido y de contraseña debe ser de 7 Caracteres!',
        buttons: ['Continuar'],
      });
  
      await alert.present();
      return;
    }
    localStorage.setItem('user', JSON.stringify(guardar));

  }


}


