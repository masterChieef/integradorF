import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  msg:string = '';

  employees = [
    {'name': 'Esto es una prueba de SocializeApp', position: 'manager', email:''},
    {'name': 'Hola Mundo', position: ' ', email:''},
    {'name': ' ', position: ' ', email:''}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteEmployee(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.employees.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name; 
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    this.hideUpdate = true;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }
  closeAlert():void {
    this.msg = '';
  }
}
