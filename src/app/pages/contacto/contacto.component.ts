import { Component } from '@angular/core';
import { ContenedorCentralComponent } from '../../contenedor-central/contenedor-central.component';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from '../../formulario/formulario.component';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterOutlet,ContenedorCentralComponent,FormularioComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
