 import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pagina1Page, Ficha1Page, Ajuste1Page } from '../index.page';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 : any;
  tab2 : any;
  tab3 : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = Ficha1Page;
    this.tab2 = Pagina1Page;
    this.tab3 = Ajuste1Page;
  }

}
