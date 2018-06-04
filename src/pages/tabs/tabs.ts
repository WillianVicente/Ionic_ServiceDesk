import { Component } from '@angular/core';

import { AbrirChamadoPage } from '../abrir-chamado/abrir-chamado';
import { ConsultarChamadoPage } from '../consultar-chamado/consultar-chamado';
import { FecharChamadoPage} from '../fechar-chamado/fechar-chamado';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AbrirChamadoPage;
  tab2Root = ConsultarChamadoPage;
  tab3Root = FecharChamadoPage;

  constructor() {

  }
}
