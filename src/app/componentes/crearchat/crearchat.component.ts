import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatsService } from '../../servicios/chats.service';
@Component({
  selector: 'app-crearchat',
  templateUrl: './crearchat.component.html',
  styleUrls: ['./crearchat.component.scss'],
})
export class CrearchatComponent implements OnInit {
  public nameChat : string;
  public description : string;

  constructor(
    private ChatService: ChatsService,
    private modal:ModalController
  ) { }

  ngOnInit() {}

  onCreate(){
    this.ChatService.createChatRoom(this.nameChat, this.description);
  }
  
  closeChat(){
    this.modal.dismiss()  
  }
}
