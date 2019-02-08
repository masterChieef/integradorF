export class Contacto {
    nombreContacto: string;
    estado: string;
    imagen: string;
  
    constructor(name?: string, imagen?: string) {
      this.nombreContacto = name;
      this.estado = 'sin estado';
      this.imagen = imagen;
      if (typeof imagen === 'undefined') {
        this.imagen = 'http://www2.udec.cl/~ran/ojs/img/iconos/usuarion.png';
      }
    }
  }
  