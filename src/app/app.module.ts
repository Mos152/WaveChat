import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFirestoreModule , FirestoreSettingsToken} from '@angular/fire/firestore';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseConfig } from '../environments/environment';
import { AppComponent } from './app.component';
import { InforoomComponent } from './componentes/inforoom/inforoom.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { InforoomPublicComponent } from './componentes/inforoom-public/inforoom-public.component';
import { ChatComponent} from './componentes/chat/chat.component';
import { PrivatechatComponent } from './componentes/privatechat/privatechat.component';
import { CrearchatComponent} from './componentes/crearchat/crearchat.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatchatprivadosComponent } from './componentes/creatchatprivados/creatchatprivados.component';
import { FiltroPipe } from './pipe/filtro.pipe';
@NgModule({
  declarations: [AppComponent,ChatComponent,PrivatechatComponent,CrearchatComponent,InforoomComponent,InforoomPublicComponent,CreatchatprivadosComponent, FiltroPipe],
  entryComponents: [ChatComponent,PrivatechatComponent, CrearchatComponent,CreatchatprivadosComponent,InforoomComponent,InforoomPublicComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule  
  ],
  imports: [ 
    MbscModule, FormsModule,
    ReactiveFormsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
