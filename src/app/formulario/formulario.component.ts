import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  contactoFormulario:FormGroup
  mostrarMensajeError:boolean=false;

 constructor(){
  this.contactoFormulario = new FormGroup(
    {
     nombre: new FormControl("",[
      Validators.required,
      Validators.minLength(4)
     ]
    ),
    apellido: new FormControl("",[
      Validators.required,
      Validators.minLength(4),
    ]),
    correo: new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    terminos: new FormControl("",[
      Validators.required
    ])
    }
    
  )  
  
  
}
 mostrarDatosFormulario(){
  console.log(this.contactoFormulario.value,this.contactoFormulario)
  console.log(this.contactoFormulario.status)
  if(!this.contactoFormulario.valid){
    this.mostrarMensajeError=true
  }
 }
}