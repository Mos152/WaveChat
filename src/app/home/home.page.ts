import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatsService, chat } from '../servicios/chats.service';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public chatRooms: any = [];

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
