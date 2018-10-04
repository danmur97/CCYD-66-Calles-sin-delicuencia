import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Settings, User, Api } from '../providers';
import { MyApp } from './app.component';
import { MapProvider } from '../providers/map/map';
import { TutorialProvider } from '../providers/tutorial/tutorial';
import { InscripcionProvider } from '../providers/inscripcion/inscripcion';
import { SaverProvider } from '../providers/saver/saver';
import { AdminZonaAProvider } from '../providers/admin-zona-a/admin-zona-a';
import { NotificadorProvider } from '../providers/notificador/notificador';
import { ReportadorProvider } from '../providers/reportador/reportador';
import { GpsProvider } from '../providers/gps/gps';
import { CmdAlarmaProvider } from '../providers/cmd-alarma/cmd-alarma';
import { ExeAlarmaProvider } from '../providers/exe-alarma/exe-alarma';
import { ZAgeneratorProvider } from '../providers/z-agenerator/z-agenerator';
import { RecibidorProvider } from '../providers/recibidor/recibidor';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from '../keys/fb_config';

import { Geolocation } from '@ionic-native/geolocation';
import { DebugToastProvider } from '../providers/debug-toast/debug-toast';
import { LoaderProvider } from '../providers/loader/loader';

export const _user: string = "Danmur";
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Api,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    Geolocation,
    AngularFireDatabase,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MapProvider,
    TutorialProvider,
    InscripcionProvider,
    SaverProvider,
    AdminZonaAProvider,
    NotificadorProvider,
    ReportadorProvider,
    GpsProvider,
    CmdAlarmaProvider,
    ExeAlarmaProvider,
    ZAgeneratorProvider,
    RecibidorProvider,
    DebugToastProvider,
    LoaderProvider
  ]
})
export class AppModule { }
