import { Component, OnInit } from '@angular/core';
import userData from 'src/app/json/users.json';  
import { Usuario } from 'src/app/usuario.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  usuarios: Usuario[] = userData;  

  constructor() { }

  ngOnInit(): void {
  }

}
