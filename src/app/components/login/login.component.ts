import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Usuario } from 'src/app/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  usuario: Usuario = {
    usuario: 'tepaseointenso',
    nombre: 'Eric',
    apellidos: 'Trasancos Palmeiro',
    pais: 'Chile',
    mail: 'erictrasancosp@gmail.com',
    fono: '56954081515',
    password: 'clave123'
  };

  formLogin!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      usuario: [this.usuario.usuario, Validators.required],
      password: [this.usuario.password,[Validators.required, Validators.minLength(2)],]
    });
  }

  ngOnInit(): void {}

  guardar() {
    console.log(this.formLogin.value);
  }


}