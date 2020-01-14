import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatsService } from '../../servicios/chats.service';
import { ChatComponent } from '../chat/chat.component';
import * as firebase from 'firebase';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-creatchatprivados',
  templateUrl: './creatchatprivados.component.html',
  styleUrls: ['./creatchatprivados.component.scss'],
})
export class CreatchatprivadosComponent implements OnInit {
  public nameChat : string;
  public description : string;
  public respuesta : any ;
  public url_img : any;
  private user: any;
  public password:string ;
  FormularioChat:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private ChatService: ChatsService,
    private modal: ModalController
  ) { this.url_img = "https://i.kym-cdn.com/photos/images/original/001/700/569/1c4.jpg "}

  ngOnInit() {

    this.FormularioChat = this.formBuilder.group({
      nameChat : ['',Validators.required],
      description:['',Validators.required],
      password:['',Validators.required],
      url_img:['',Validators.required],
    });

    firebase.auth().onAuthStateChanged((res) =>{
      this.user = res.uid
      console.log(this.user)  
    });
  }

  get f(){ return this.FormularioChat.controls }
  
  onCreate(){
    var name = this.f.nameChat.value;
    var description=this.f.description.value;
    var url=this.f.url_img.value;
    var pass=this.f.password.value;
    //this.ChatService.createPrivateChatRoom(this.nameChat, this.description,this.url_img,this.user,this.password).then((res)=> {
    //})
    this.ChatService.createPrivateChatRoom(name,description,url,this.user,pass).then((res)=> {
    })
    this.closeCreate();
  } 
  closeCreate(){
    this.modal.dismiss()
  }
  
}
