import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { AbrirChamadoPage } from '../pages/abrir-chamado/abrir-chamado';
import { ConsultarChamadoPage } from '../pages/consultar-chamado/consultar-chamado';
import { FecharChamadoPage} from '../pages/fechar-chamado/fechar-chamado';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AbrirChamadoPage,
    ConsultarChamadoPage,
    FecharChamadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AbrirChamadoPage,
    ConsultarChamadoPage,
    FecharChamadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
