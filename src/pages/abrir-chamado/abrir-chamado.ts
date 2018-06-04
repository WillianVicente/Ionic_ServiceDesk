import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fila } from '../../model/Fila'

/**
 * Generated class for the AbrirChamadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abrir-chamado',
  templateUrl: 'abrir-chamado.html',
})
export class AbrirChamadoPage {
  
  public filas : Fila[];

  constructor(public navCtrl: NavController) 
  {
    let f1 = {nome:'Manutenção'};
    let f2 = {nome:'Orientação'};
    let f3 = {nome:'Limpeza'};
    this.filas = [f1,f2,f3];
  }

  AddChamado(fila: Fila, descricao: String){
    alert(fila.nome);
    alert(descricao);
    //this.navCtrl.push(ListPaisesPage, {paisSelecionado: regiao})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AbrirChamadoPage');
  }

}
