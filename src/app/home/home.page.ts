import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatsService, chat } from '../servicios/chats.service';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';
import { PrivatechatComponent} from '../componentes/privatechat/privatechat.component';
import { ActionSheetController } from '@ionic/angular';
import { CrearchatComponent } from '../componentes/crearchat/crearchat.component';
import { CreatchatprivadosComponent } from '../componentes/creatchatprivados/creatchatprivados.component';
import * as firebase from 'firebase';
import { InforoomPublicComponent } from '../componentes/inforoom-public/inforoom-public.component';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { AngularFirestore } from '@angular/fire/firestore';
import { userI } from '../models/userI';
import { InforoomComponent } from '../componentes/inforoom/inforoom.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public filtrado :boolean = false;
  private user: any;
  public mischatprivados:any= [];
  public mischatpublicos:any= [];
  ////////////////////////////
  public chatRooms: any = [];
  public chatPrivateRooms : any = [];
  public myPrivateRooms: any = [];
  public myPublicRooms: any = [];
  userActivo: string;
  constructor(public authservice : AuthService, 
              public chatservice: ChatsService,
              private modal: ModalController,
              public actionSheetController: ActionSheetController,
              private db : AngularFirestore){}
              ngOnInit(){
                this.cargarChats()
                this.CargarDatosPerfil()
                //obtengo uid del usuario logueado para realizar un filtrado
                // this.userUID = this.user.uid;
                firebase.auth().onAuthStateChanged((res) => {
                  this.user = res.uid;
                  console.log(this.user);
                 });
              }
  onlogout(){
    this.authservice.logout();
  }
cargarChats(){
  this.chatservice.getChatRooms().subscribe( chats => {
    this.chatRooms = chats;  
   // this.mischatprivados = this.chatRooms.userID
    console.log("chat publicos",this.chatRooms)
  })
  this.chatservice.getPrivateChatRooms().subscribe( chats => {
    this.chatPrivateRooms = chats;
    console.log("chats privados",this.chatPrivateRooms)
  })
}

  openChat(chat){
    this.modal.create({
      component: ChatComponent,
      componentProps: {
        chat: chat
      }
    }).then((modal) => modal.present())
  }

  openPrivateChat(chat){
    console.log(chat)
    this.modal.create({
      component: PrivatechatComponent,
      componentProps:{
        chat:chat
      }   
    }).then((modal) => modal.present())
  }

  createRoom(sala){
   this.modal.create({
    component: CrearchatComponent,
      componentProps: {
        sala:sala  
      }
   }).then((modal) => modal.present())
  }
  
  createPrivateRoom(salaprivada){
    this.modal.create({
      component:  CreatchatprivadosComponent,
       componentProps:{
          salaprivada:salaprivada  
        }  
    }).then((modal) => modal.present())
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'opciones',
      buttons: [{
        text: 'desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.onlogout()
        }
      }]
    });
    await actionSheet.present();
  }
0
  mis(){
    if (this.filtrado == false) {
      this.filtrado = true
      this.filterMyPrivateRooms()
      this.filterMyPublicRooms()
      console.log("filtrado")
      
    }else{
      this.filtrado = false
      this.cargarChats()
      console.log("noFiltrado")
    }

  }

  filterMyPrivateRooms(){
    this.chatservice.filterPrivateRoomsByUID(this.user).subscribe( chats => {
      this.myPrivateRooms = chats;
  });
}
filterMyPublicRooms(){
  this.chatservice.filterPublicRoomsByUID(this.user).subscribe( chats => {
    this.myPublicRooms = chats;
});
}
  CargarDatosPerfil(){
    console.log("mis datos",this.user);

  }
  editChat(chat){
    this.modal.create({
      component: InforoomComponent,
      componentProps:{
        chat:chat  
      }  
    }).then((modal) => modal.present())
  }
  editPublicChat(chat){
    this.modal.create({
      component: InforoomPublicComponent,
      componentProps:{
        chat:chat  
      }
    }).then((modal) => modal.present())

  }
}


