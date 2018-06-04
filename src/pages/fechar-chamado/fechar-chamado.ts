import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fila } from '../../model/fila';

/**
 * Generated class for the FecharChamadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fechar-chamado',
  templateUrl: 'fechar-chamado.html',
})
export class FecharChamadoPage {

  public filas : Fila[];

  constructor(public navCtrl: NavController) 
  {
    let f1 = {nome:'Manutenção'};
    let f2 = {nome:'Orientação'};
    let f3 = {nome:'Limpeza'};
    this.filas = [f1,f2,f3];
  }

  ListarChamado(fila: Fila){
    alert(fila.nome);
    //this.navCtrl.push(ListPaisesPage, {paisSelecionado: regiao})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FecharChamadoPage');
  }

}
