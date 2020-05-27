import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { HomeComponent } from './pages/home/home.component';
import { DragComponent } from './components/drag/drag.component';
import { PaisesComponent } from './components/paises/paises.component';

const RUTAS: Routes = [
    {path:'home', component:HomeComponent},
    {path:'linea', component:LineaComponent},
    {path:'virtual', component:VirtualComponent},
    {path:'drag', component:DragComponent},
    {path:'paises', component:PaisesComponent},
    {path:'**', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTES = RouterModule.forRoot(RUTAS);