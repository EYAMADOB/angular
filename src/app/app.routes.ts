import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProgramasComponent } from './pages/programas/programas.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/contacto",
        pathMatch:"full"
    },
{
    path:'contacto',
    component: ContactoComponent
},
{
    path:'nosotros',
    component: NosotrosComponent
},
{
    path:'programas',
    component: ProgramasComponent
}
];
