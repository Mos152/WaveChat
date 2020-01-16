import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatsService, chat } from '../servicios/chats.service';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';
import { PrivatechatComponent} from '../componentes/privatechat/privatechat.component';
import { ActionSheetController } from '@ionic/angular';
import { CrearchatComponent } from '../componentes/crearchat/crearchat.component';
import { CreatchatprivadosComponent } from '../componentes/creatchatprivados/creatchatprivados.component';
import * as firebase from "firebase/app";
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public filtrado :boolean = false;
  user : firebase.User;
  public chatRooms: any = [];
  public chatPrivateRooms : any = [];
  userActivo: string;
  constructor(public authservice : AuthService, 
              public chatservice: ChatsService,
              private modal: ModalController,
              public actionSheetController: ActionSheetController){}
  onlogout(){
    this.authservice.logout();
  }

  ngOnInit(){
    this.cargarChats()
    
  }

cargarChats(){
  this.chatservice.getChatRooms().subscribe( chats => {
    this.chatRooms = chats;  
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
  mis(){
    if (this.filtrado == false) {
      this.filtrado = true
      this.filtrarLosMios()
      console.log("filtrado")
    }else{
      this.filtrado = false
      this.cargarChats()
      console.log("noFiltrado")
    }

  }

  filtrarLosMios(){
    let chatPublicados 
    chatPublicados = this.chatRooms
   
  }
}
