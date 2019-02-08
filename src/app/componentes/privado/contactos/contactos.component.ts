import { Component, OnInit } from '@angular/core';
import { Contacto } from './../models/contacto';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contactos: Contacto[];

  constructor() { 
    this.contactos = [];
  }

  ngOnInit() {
    const juan = new Contacto('Juan');
    const dario = new Contacto('Dario');
    this.contactos.push(juan);
    this.contactos.push(dario);
  }

}
