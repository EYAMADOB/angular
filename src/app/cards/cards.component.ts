import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactoComponent } from '../pages/contacto/contacto.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink,ContactoComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

}
