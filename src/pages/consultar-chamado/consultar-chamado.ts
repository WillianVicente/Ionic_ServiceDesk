import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Fila } from '../../model/fila';
import { Chamado } from '../../model/chamado';
/**
 * Generated class for the ConsultarChamadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultar-chamado',
  templateUrl: 'consultar-chamado.html',
})
export class ConsultarChamadoPage {

  public filas : Fila[];
  public chamados : Chamado[];

    constructor(public navCtrl: NavController) 
    { 
      let f1 = {nome:'Manutenção'};
      let f2 = {nome:'Orientação'};
      let f3 = {nome:'Limpeza'};
      this.filas = [f1,f2,f3];

      let c1 = {descricao:'Computador precisa ser formatado', status: "aberto",fila: f1};
      let c2 = {descricao:'Como instala o Office365?',status: "aberto", fila: f2};
      let c3 = {descricao:'Precisamos de uma limpeza no corredor C2, derrubaram café!',status: "aberto", fila: f3}
      this.chamados = [c1,c2,c3];
    }
  
    ListarChamado(fila: Fila){
      alert(fila.nome);
      //this.navCtrl.push(ListPaisesPage, {paisSelecionado: regiao})
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarChamadoPage');
  }

}
