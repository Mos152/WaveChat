import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ChatsService } from '../../servicios/chats.service';
import { AlertController} from '@ionic/angular';
@Component({
  selector: 'app-inforoom-public',
  templateUrl: './inforoom-public.component.html',
  styleUrls: ['./inforoom-public.component.scss'],
})
export class InforoomPublicComponent implements OnInit {

  chat: any;
  name: string;
  description: string;
  img:string;
  id:string;

  constructor(private modal:ModalController,
    private navparams: NavParams,
    public alertController: AlertController,
    private ChatService:ChatsService,) { }

  ngOnInit() {
    this.chat = this.navparams.get('chat');
    this.id=this.chat.id
    this.img=this.chat.url_img;
    this.name = this.chat.name;
    this.description = this.chat.description;
  }
  closeChat(){
    this.modal.dismiss();
  }
  async update(){
    const alert = await this.alertController.create({
      message:'la sala fue modificada',
      buttons:['listo']
    });
    this.ChatService.updateRoomPublic(this.id,this.name,this.description,this.img);
    await alert.present();
    let result = await alert.onDidDismiss();
    this.closeChat();
    //console.log("listo");
  }
  async delete(){
    const alert = await this.alertController.create({
      message:'la sala fue eliminada',
      buttons:['listo']
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    this.closeChat();
    this.ChatService.deleteRoomPublic(this.id);
  } 

}
