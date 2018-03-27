import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage,
                Ficha1Page,
                MenuPage } from '../pages/index.page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabs = TabsPage;
  ficha1 = Ficha1Page;
  menuNav = MenuPage;
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
                         private menuCtrl : MenuController  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /* Abrir Pagina*/
  openPage( page : any ){
      this.rootPage = page;  /* Cambiando la pagina root */
      this.menuCtrl.close();
  }

}
