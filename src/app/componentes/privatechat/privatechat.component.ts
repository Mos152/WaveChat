import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { message } from '../../models/message';
import { ChatsService } from '../../servicios/chats.service';
import { AuthService } from '../../servicios/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-privatechat',
  templateUrl: './privatechat.component.html',
  styleUrls: ['./privatechat.component.scss'],
})
export class PrivatechatComponent implements OnInit {
  user : firebase.User;
  public chat:any;
  //public message: message;
  public ngclave:string;
  private permition: boolean = false; 
  private showdiv: boolean = true;
  public messages = [];
  public room: any;
  public msg:string;
  public userInfo;
  public userUID;
  public userName;
  constructor(private navparams: NavParams,
    private modal:ModalController,
    private chatService: ChatsService,
    private authService: AuthService,
    fireAuth: AngularFireAuth,
    private db : AngularFirestore) { }

  ngOnInit() {
    this.user = firebase.auth().currentUser;
    this.userUID = this.user.uid;
    this.userName = this.authService.getUserInfo(this.userUID).subscribe(uid =>{
      this.userInfo = uid;
      this.userName = this.userInfo.name;
    });
    this.chatService.getprivateChatRoom( this.chat.id).subscribe(room =>{
      this.room = room;
      console.log(this.room)
    })  
    this.chat = this.navparams.get('chat')
  }
  closeChat(){
    this.modal.dismiss();
  }

  Entrar(){
    if (this.room.password == this.ngclave) {
      this.permition = true
      this.showdiv = false
    }else{
      throw console.error("contraseña incorrecta");
      
    }
  }
  sendMessage(){
    //this.messages.push(this.message);
    
    const mensaje : message = {
    userUID : this.userUID,
    userName : this.userName,
    content : this.msg,
    type :'text', 
    date: new Date()
    }
    
    this.chatService.sendPrivateMsgToFirebase(mensaje, this.chat.id);
    this.msg = "";
  }

}
