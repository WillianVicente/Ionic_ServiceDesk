import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarChamadoPage } from './consultar-chamado';

@NgModule({
  declarations: [
    ConsultarChamadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarChamadoPage),
  ],
})
export class ConsultarChamadoPageModule {}
