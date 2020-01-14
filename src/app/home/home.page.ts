import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatsService, chat } from '../servicios/chats.service';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';
import { PrivatechatComponent} from '../componentes/privatechat/privatechat.component';
import { ActionSheetController } from '@ionic/angular';
import { CrearchatComponent } from '../componentes/crearchat/crearchat.component';
import { CreatchatprivadosComponent } from '../componentes/creatchatprivados/creatchatprivados.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public chatRooms: any = [];
  public chatPrivateRooms : any = [];
  constructor(public authservice : AuthService, 
              public chatservice: ChatsService,
              private modal: ModalController,
              public actionSheetController: ActionSheetController){}
  onlogout(){
    this.authservice.logout();
  }

  ngOnInit(){

    this.chatservice.getChatRooms().subscribe( chats => {
      this.chatRooms = chats;  
      console.log(this.chatRooms)
    })
    this.chatservice.getPrivateChatRooms().subscribe( chats => {
      this.chatPrivateRooms = chats;
      console.log(this.chatPrivateRooms)
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
}
