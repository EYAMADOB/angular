import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContenedorCentralComponent } from './contenedor-central/contenedor-central.component';
import { FormularioComponent } from './formulario/formulario.component';
import {FooterComponent} from './footer/footer.component'
import { ContactoComponent} from './pages/contacto/contacto.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ContenedorCentralComponent,FormularioComponent,FooterComponent,ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularced';
}
