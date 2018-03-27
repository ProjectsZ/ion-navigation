import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from '../index.page';

@Component({
  selector: 'page-ficha1',
  templateUrl: 'ficha1.html',
})
export class Ficha1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
                        private modalCtrl : ModalController) {
  }

  /* Mostrar modal */
  viewModal(){
                                                 /* create(component, data, opts) */
    let modal =  this.modalCtrl.create( ModalPage, {
                                                                                              name: "Fred Pizarro",
                                                                                              hobby: "Programar"
                                                                                          } );
                              /* El modal se creará en base (tema) al `ModalPage`  */
                              /* `{ ... }` Mantar Parámetros al Modal */
          modal.present();  /*  Inmediatamente se crea y lo llama el modal */
          modal.onDidDismiss( data =>{

                                         if(data){
                                              console.log("Se cerro el modal, con data (del modal):");
                                              console.log( data ); /* data recibido del `Modal` */
                                          }else{ console.log("Se cerro el modal, sin datas ..."); }

                                                          } ) /* Cuando se cierra optener los ... */
  }

}
