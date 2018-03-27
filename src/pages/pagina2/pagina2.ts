import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from '../index.page';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3 : any  = Pagina3Page;
  dataset: any[] = [
    {
      name: "Fred Pizarro",
      skill: "Web Development"
    },{
      name: "Sky Rider",
      skill: "Android Development"
    },{
      name: "ZFred",
      skill: "UX & UI Designer"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    /* Redirección */
  nextPagina3(data : any){
    console.log(data);

    this.navCtrl.push( Pagina3Page, { 'data' : data }  );
                          /* push( page, argumentoAdicional ó objeto, variable texto ) */
                                         /* { 'data' : data } es igual al objeto { data }  en ESC6 */
                                         /* 'data' es el identificador  para obtener  los parametros */
  }

}
