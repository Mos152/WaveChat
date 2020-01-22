import { Component, OnInit } from '@angular/core';
import { NavController,NavParams, ModalController } from '@ionic/angular';
import { message } from '../../models/message';
import { ChatsService } from '../../servicios/chats.service';
import { AuthService } from '../../servicios/auth.service';
import { room} from '../../models/room';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import 'firebase/auth';
import { ActionSheetController } from '@ionic/angular';
import 'firebase/firestore';
import { InforoomComponent } from '../inforoom/inforoom.component';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  user : firebase.User;
  public chat:any;
  //public message: message; 
  public messages = [];
  public room: any;
  public msg:string;
  public userInfo;
  public userUID;
  public userName;
  constructor( 
    private navparams: NavParams,
    private modal:ModalController,
    private chatService: ChatsService,
    private authService: AuthService,
    public actionSheetController: ActionSheetController,
    fireAuth: AngularFireAuth,
    private db : AngularFirestore ) { 
    }

  ngOnInit() {
    this.user = firebase.auth().currentUser;
    this.userUID = this.user.uid;
    this.userName = this.authService.getUserInfo(this.userUID).subscribe(uid =>{
      this.userInfo = uid;
      this.userName = this.userInfo.name;
    });
    this.chatService.getChatRoom( this.chat.id).subscribe(room =>{
      this.room = room;   
    })  
    this.chat = this.navparams.get('chat')
  }
  closeChat(){
    this.modal.dismiss();
  }


  // informationRoom(){
  //   let modaltest = this.modal.create({
  //     component: InforoomComponent,
  //   });
  //   this.nav.
  // }

  sendMessage(){
    //this.messages.push(this.message);
    
    const mensaje : message = {
    userUID : this.userUID,
    userName : this.userName,
    content : this.msg,
    type :'text', 
    date: new Date()
    }
    
    this.chatService.sendMsgToFirebase(mensaje, this.chat.id);
    this.msg = "";
  }
  }
