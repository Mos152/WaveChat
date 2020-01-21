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
  
  public url_img : any;
  private user :any;

  constructor(
    private formBuilder:FormBuilder,
    private ChatService: ChatsService,
    private modal: ModalController
  ) { this.url_img = "https://i.kym-cdn.com/photos/images/original/001/700/569/1c4.jpg "}
  
  get nameChat(){
    return this.FormularioChat.get('nameChat');
  }
  get password(){
    return this.FormularioChat.get('password');
  }
  get description(){
    return this.FormularioChat.get('description');
  }


  public errorMessages = {
    nameChat:[
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }  
    ],
    password: [
      { type: 'required', message: 'password is required' },
      { type: 'minLength', message: 'la clave no puede tener menos de 10 caracteres' }
    ],
    description:[
      { type: 'required', message: 'description is required' },
      { type: 'minLength', message: 'la descripcion no puede tener menos de 30 caracteres' }
    ],
  };
  FormularioChat = this.formBuilder.group({
    nameChat: ['', [Validators.required, Validators.maxLength(100)]],
    password: ['',[Validators.required,Validators.minLength(10)]],
    description:['',[Validators.required,Validators.minLength(30)]]
  });

  ngOnInit() {
    firebase.auth().onAuthStateChanged((res) =>{
         this.user = res.uid
         console.log(this.user)  
       });
     }

  get f(){ return this.FormularioChat.controls}   
  onCreate(){
    var name=this.f.nameChat.value;
    var pass=this.f.password.value;
    var topic=this.f.description.value;
    this.ChatService.createPrivateChatRoom(name, topic,this.url_img,this.user,pass).then((res)=> {
      console.log(this.user);
    })  
    this.closeCreate();
    
  }
  closeCreate(){
    this.modal.dismiss()
  } 
     
  } 
  

