import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFirestoreModule , FirestoreSettingsToken} from '@angular/fire/firestore';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseConfig } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChatComponent} from './componentes/chat/chat.component';
import { PrivatechatComponent } from './componentes/privatechat/privatechat.component';
import { CrearchatComponent} from './componentes/crearchat/crearchat.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatchatprivadosComponent } from './componentes/creatchatprivados/creatchatprivados.component';
@NgModule({
  declarations: [AppComponent,ChatComponent,PrivatechatComponent,CrearchatComponent,CreatchatprivadosComponent],
  entryComponents: [ChatComponent,PrivatechatComponent, CrearchatComponent,CreatchatprivadosComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule  
  ],
  imports: [FormsModule,
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
