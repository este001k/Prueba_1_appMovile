import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia-qr',
  templateUrl: './asistencia-qr.page.html',
  styleUrls: ['./asistencia-qr.page.scss'],
})
export class AsistenciaQrPage implements OnInit {

  nombre: string | undefined ;
  contrasenna :string | undefined;
  constructor() { }

  ngOnInit() {
  }

}
