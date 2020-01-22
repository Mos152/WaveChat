import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ChatsService } from '../../servicios/chats.service';
@Component({
  selector: 'app-inforoom',
  templateUrl: './inforoom.component.html',
  styleUrls: ['./inforoom.component.scss'],
})
export class InforoomComponent implements OnInit {
  chat: any;
  name: string;
  description: string;
  img:string;
  password:string;
  id:string;
  constructor(
    private modal:ModalController,
    private navparams: NavParams,
    private ChatService:ChatsService,
    ) {
    }

  ngOnInit() {
    this.chat = this.navparams.get('chat');
    console.log(this.chat);
  
    this.id=this.chat.id
    this.password=this.chat.password;
    this.img=this.chat.url_img;
    this.name = this.chat.name;
    this.description = this.chat.description;
  }
  closeChat(){
    this.modal.dismiss();
  }
  update(){
    this.ChatService.updateRoomPrivate(this.id,this.name,this.description,this.img,this.password);
    console.log("listo");
  } 
  delete(){
    this.ChatService.deleteRoomPrivate(this.id);
  }
}
