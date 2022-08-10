import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';

import {
  MatSnackBar
} from '@angular/material/snack-bar';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar ) { 
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit() {
  }

  ingresar () {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    console.log(usuario)
    console.log(password)

    if(usuario == 'davidc' && password == '1234'){
      //REDIRECCIONAMOS
      this.fakeloading();
    }
      else{
        this.error();
        this.form.reset();
      //mensaje de error
    }
  }
  error (){
    this._snackBar.open('Usuario o contraseña ingresados inválidos','Cerrar',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })

  }

  fakeloading() {
    this.loading = true;
    setTimeout(() => {
      //redireccionar al dashboard
      this.loading = false;
    }, 1500); 
  }
}