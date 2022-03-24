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
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  usuario: Usuario = {
    usuario: 'tepaseointenso',
    nombre: 'Eric',
    apellidos: 'Trasancos Palmeiro',
    pais: 'Chile',
    mail: 'erictrasancosp@gmail.com',
    fono: '56954081515',
    password: 'clave123'
  };

  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      usuario: [this.usuario.usuario, Validators.required],
      nombre: [this.usuario.nombre,[Validators.required, Validators.minLength(2)],],
      apellidos: [this.usuario.apellidos,[Validators.required, Validators.minLength(5)],],
      pais: [this.usuario.pais, Validators.required],
      mail: [this.usuario.mail, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      fono: [this.usuario.fono, [Validators.required, this.validarNumero(this.usuario.fono)]],
      terminos: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {}

  guardar() {
    console.log(this.usuarioForm.value);
    alert("Formulario enviado correctamente");
  }

  //VALIDACION TELEFONO
  validarNumero(countryPhoneCode = '*'): ValidatorFn {
    return Validators.pattern('([+]'+ countryPhoneCode + ')?([0-9]{11})$');
  }
}