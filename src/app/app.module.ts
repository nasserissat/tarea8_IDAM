import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SQLite } from '@ionic-native/sqlite/ngx'; // importar el módulo

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { DatabaseService } from 'src/services/databaseService.service';
import { VivenciaService } from 'src/services/vivencias.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, VivenciaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
