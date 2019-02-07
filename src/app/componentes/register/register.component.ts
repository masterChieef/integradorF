import { Component, OnInit } from '@angular/core';
import { ValidationsService } from './../../Servicios/validations.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: String = "";
  apellido: String = "";
  usuario: String = "";
  carrera: String = "";
  email: String = "";
  pasword: String ="";
  busy: Promise<any>;
  esperando: Boolean;

  constructor(private router: Router, private validationsDataServise:ValidationsService ) { }

  ngOnInit() {
    this.nombre='';
    this.apellido='';
    this.usuario='';
    this.carrera='';
    this.email='';
    this.pasword='';
    this.esperando= false;
  }

  users() {
    if ( !this.esperando ) {
      this.esperando = true;
      this.busy = this.validationsDataServise.users(this.nombre, this.apellido, this.usuario, this.carrera, this.email, this.pasword).then( r => {
        this.esperando = false;
        swal({
          title: 'Te damos la bienvenida',
          text: 'Ahora podras ingresar',
          icon: 'success',
        })
        .then( response => {
          this.nombre='';
          this.apellido='';
          this.usuario='';
          this.carrera='';
          this.email='';
          this.pasword='';
          this.router.navigate(['/login']);
        });
      }).catch( e => {
        this.esperando = false;
        console.log(e);
      });
    }
  }

}
