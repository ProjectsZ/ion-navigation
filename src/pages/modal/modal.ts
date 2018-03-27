import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre: string = "";
  pasatiempo: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
                        public viewCtrl : ViewController) {

    /* Obtener los parámetros `{ ... }` del Modal  */
    this.nombre = this.navParams.get("name");
    this.pasatiempo = this.navParams.get("hobby");

    console.log( this.nombre, this.pasatiempo );

  }

  /* Cerrar Modal */
  dismissModal_ConParametros(){

    let data = {
      name: "Fred",
      lastName: "Pizarro",
      age: 25
    };

    this.viewCtrl.dismiss( data );
  }
  /* Cerrar Modal */
  dismissModal_SinParametros(){
    this.viewCtrl.dismiss();
  }


}
