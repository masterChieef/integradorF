import { Component, OnInit } from '@angular/core';
import { ValidationsService } from './../../Servicios/validations.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String = "";
  pasword:String = "";
  busy: Promise<any>;
  esperando: boolean;

  constructor(private router: Router, private validationsDataServise:ValidationsService) { }

  ngOnInit() {
    this.email = '';
    this.pasword = '',
    this.esperando = false;
  }

  login() {
    if ( !this.esperando ) {
      this.esperando = true;
      this.busy = this.validationsDataServise.login(this.email, this.pasword).then( r => {
        this.esperando = false;
        sessionStorage.setItem('isLoggedin', 'true');
        const userData = { id: r.id, name: r.name };
        sessionStorage.setItem('user', JSON.stringify(userData));
        this.router.navigate(['/']);
      }).catch( e => {
        this.esperando = false;
        swal({
          title: 'Iniciar Sesión',
          text: 'Contraseña o login incorrectas',
          icon: 'error',
        })
        .then( response => {
          sessionStorage.clear();
          this.router.navigate(['/login']);
        });
      });
    }
  }

}
