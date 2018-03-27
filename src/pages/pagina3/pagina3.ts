import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  dataset: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log( navParams );
    this.dataset = this.navParams.get("data");
                                                                     /* 'data' es el identificador desde pagina2 */
  }

  backXevento(){
    this.navCtrl.pop();
                        /* pop( ): el array navCtrl se modifica y su longitud disminuye en 1 screen */
  }

  goRoot(){
    this.navCtrl.popToRoot();
  }

}
