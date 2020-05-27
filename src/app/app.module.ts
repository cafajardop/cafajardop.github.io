import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { APP_ROUTES } from './app.routes';
import { VirtualComponent } from './components/virtual/virtual.component';
import { HomeComponent } from './pages/home/home.component';

//Virtual scroll
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragComponent } from './components/drag/drag.component';

//Drag and Drop
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PaisesComponent } from './components/paises/paises.component';

//httpclient
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    MyLineChartComponent,
    NavbarComponent,
    VirtualComponent,
    HomeComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    APP_ROUTES,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
