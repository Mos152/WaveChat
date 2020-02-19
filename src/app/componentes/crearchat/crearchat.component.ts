import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ChatsService } from '../../servicios/chats.service';
import { HomePageModule } from '../../home/home.module';
import { Router} from '@angular/router';
import { HomePage } from 'src/app/home/home.page';
import { ChatComponent } from '../chat/chat.component';
import * as firebase from 'firebase';
@Component({
  selector: 'app-crearchat',
  templateUrl: './crearchat.component.html',
  styleUrls: ['./crearchat.component.scss'],
})
export class CrearchatComponent implements OnInit {
  public nameChat : string;
  public description : string;
  public respuesta : any ;
  public url_img : any;
  private user: any;

  constructor(
    private ChatService: ChatsService,
    private alertCtrl: AlertController,
    private modal:ModalController,
   // private home:HomePage,
    private Router:Router
  ) {
   this.url_img = "https://i.kym-cdn.com/photos/images/original/001/700/569/1c4.jpg "
   }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((res) => {
      this.user = res.uid
      console.log(this.user)
     });
  }

  
  onCreate(){
    

    this.ChatService.createChatRoom(this.nameChat, this.description,this.url_img,this.user ).then((res)=> {
      //this.respuesta = res;
     // console.log(this.respuesta.name)
    })
    this.closeCreate();
   // this.openChat(this.respuesta)
  } 
  
  closeCreate(){
    this.modal.dismiss()  
  }
  openChat(chat){
    this.modal.create({
      component: ChatComponent,
      componentProps: {
        chat: chat
      }
    }).then((modal) => modal.present())
  }
  
}
