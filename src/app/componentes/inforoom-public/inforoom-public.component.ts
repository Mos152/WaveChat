import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ChatsService } from '../../servicios/chats.service';
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
  update(){
    this.ChatService.updateRoomPublic(this.id,this.name,this.description,this.img);
    console.log("listo");
  }
  delete(){
    this.ChatService.deleteRoomPublic(this.id);
  } 

}
