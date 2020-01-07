import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { message } from '../../models/message';
import { ChatsService } from '../../servicios/chats.service';
import { room} from '../../models/room';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public chat:any;
  public message: message; 
  public messages = [];
  //public room: any;
  public room:room [];
  constructor( 
    private navparams: NavParams,
    private modal:ModalController,
    private chatService: ChatsService ) { }

  ngOnInit() {

    this.chatService.getChatRoom( this.chat.id).subscribe(room =>{
      this.room = room;
      console.log(this.room);
           
    })  
    this.chat = this.navparams.get('chat')
  }
  closeChat(){
    this.modal.dismiss()  
  }
  sendMessage(){
    this.messages.push(this.message);
    
  }
}
