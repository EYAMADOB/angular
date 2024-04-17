import { Component } from '@angular/core';
import { ContenedorCentralComponent } from '../../contenedor-central/contenedor-central.component';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from '../../formulario/formulario.component';
import { TextosService } from '../../servicio/textos/textos.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterOutlet,ContenedorCentralComponent,FormularioComponent,HttpClientModule],
  providers:[TextosService],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  textos:any;
  constructor(
    private textosService:TextosService
  )
{
  this.textosService.getTextos().subscribe(info=> 
    this.textos = info
  )

}
}
