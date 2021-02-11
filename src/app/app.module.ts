import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component'
import { GryffindorComponent } from './component/gryffindor/gryffindor.component';
import { HousesComponent } from './component/houses/houses.component';
import { BuscarPorNombrePipe } from './pipes/buscar-por-nombre.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HousesComponent,
    GryffindorComponent,
    BuscarPorNombrePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
