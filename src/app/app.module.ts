import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {
                Pagina1Page, Pagina2Page, Pagina3Page,
                TabsPage,
                Ficha1Page, ModalPage,
                Ajuste1Page
              } from '../pages/index.page';


@NgModule({
  declarations: [
    MyApp,
    Pagina1Page,
    Pagina2Page,
    Pagina3Page,
    TabsPage,
    Ficha1Page,
    Ajuste1Page,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pagina1Page,
    Pagina2Page,
    Pagina3Page,
    TabsPage,
    Ficha1Page,
    Ajuste1Page,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
 
