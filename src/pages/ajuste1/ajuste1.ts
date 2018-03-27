import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ajuste1',
  templateUrl: 'ajuste1.html',
})
export class Ajuste1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /* Redireccionar  a la pagina principal de los tabs */
  activateTabRoot(){
    this.navCtrl.parent.select(0);
  }

}
