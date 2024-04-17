import { Component } from '@angular/core';
import { CursosComponent } from '../../cursos/cursos.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-programas',
  standalone: true,
  imports: [RouterOutlet, CursosComponent],
  templateUrl: './programas.component.html',
  styleUrl: './programas.component.css'
})
export class ProgramasComponent {

}
