import { Component, OnInit } from '@angular/core';
import userData from 'src/app/json/users.json';
import { Usuario } from 'src/app/usuario.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  usuarios: Usuario[] = userData; 

  constructor() { }

  ngOnInit(): void {
  }

}
