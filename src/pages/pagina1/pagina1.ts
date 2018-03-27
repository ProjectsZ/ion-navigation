import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pagina2Page } from '../index.page';

@Component({
  selector: 'page-pagina1',
  templateUrl: 'pagina1.html',
})
export class Pagina1Page {

  paginaDOS:any = Pagina2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navegarPage(){
    this.navCtrl.push( Pagina2Page );
  }

}
