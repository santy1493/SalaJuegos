import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  usuario:Usuario = new Usuario();

  constructor() { 
    this.usuario.nombre;
    this.usuario.apellido;
  }

  ngOnInit(): void {

    //Guadamos en localStorage en JSON
    this.usuario.nombre = 'Santi';
    this.usuario.apellido = 'Fossa';
    localStorage.setItem('usuario', JSON.stringify(this.usuario));

    //Leer del localStorage
    let usr = localStorage.getItem('usuario');
    console.log(usr);
    if(usr) {
      usr = JSON.parse(usr);
    }
    console.info(usr);
  }

}
