import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { message } from '../models/message';
import { firestore } from 'firebase' ;
import * as firebase from 'firebase';
//import { ConsoleReporter } from 'jasmine';
//import { message } from '../models/message';
//import { room } from '../models/room';

export interface chat{
  description : string; 
  name : string ;
  id : string;
  img : string; 
  user:string;
}
export interface privatechat{
  description : string;
  name : string;
  id : string;
  img : string;
  password : string;
  user:string
}

@Injectable({
  providedIn: 'root'
})
export class ChatsService implements OnInit{
  private user: any;
  constructor(private db : AngularFirestore) { }
  ngOnInit() {
    firebase.auth().onAuthStateChanged((res) =>{
         this.user = res.uid
         console.log(this.user)  
       });
     }
  getChatRooms(){
    return this.db.collection('ChatsRooms').snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a =>{
        const data = a.payload.doc.data() as chat;
        data.id = a.payload.doc.id;
        return data;
      })  
    }))
  }

  getPrivateChatRooms(){
    return this.db.collection('PrivateChatRooms').snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a =>{
        const data = a.payload.doc.data() as privatechat;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
  getprivateChatRoom(chat_id :string){
    return this.db.collection('PrivateChatRooms').doc(chat_id).valueChanges()  
  }

  getChatRoom( chat_id : string  ){
    return this.db.collection('ChatsRooms').doc(chat_id).valueChanges()
  }

 

  sendMsgToFirebase(message : message, chat_id : string,){
    this.db.collection('ChatsRooms').doc(chat_id).update({
      messages : firestore.FieldValue.arrayUnion(message),
    })
  }

  sendPrivateMsgToFirebase(message : message,chat_id:string){
    this.db.collection('PrivateChatRooms').doc(chat_id).update({
      messages : firestore.FieldValue.arrayUnion(message),
    })
  }

  createChatRoom( nameChat:string, description:string,img:string,user:string){
   
    return this.db.collection('ChatsRooms').add({
      name:nameChat,
      description:description,
      url_img:img,
      userID:user
    });
  }
  createPrivateChatRoom( nameChat:string, description:string,img:string,user:string,password:string){
    return this.db.collection('PrivateChatRooms').add({
      name:nameChat,
      password:password,
      description:description,
      url_img:img,
      userID:user    
    });
  }
  filterPrivateRoomsByUID(user){
    return this.db.collection("PrivateChatRooms", ref => ref.where('userID', '==', user)).snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a =>{
        const data = a.payload.doc.data() as privatechat;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
}
filterPublicRoomsByUID(user){
  return this.db.collection("ChatsRooms", ref => ref.where('userID', '==', user)).snapshotChanges().pipe(map(rooms =>{
    return rooms.map(a =>{
      const data = a.payload.doc.data() as chat;
      data.id = a.payload.doc.id;
      return data;
    })
  }));
}
updateRoomPrivate(id:string, name:string,description:string,img:string,password:string){
  this.db.collection('PrivateChatRooms').doc(id).update({
    name:name,
    description:description,
    url_img:img,
    password:password,    
  })

}
updateRoomPublic(id:string,name:string,description:string,img:string){
  this.db.collection('ChatsRooms').doc(id).update({
    name:name,
    description:description,
    url_img:img,
  })
}
deleteRoomPublic(id:string){
  this.db.collection('ChatsRooms').doc(id).delete().then(function(){
    console.log("se elimino la sala publica");
  }).catch(function(error){
    console.log("error");
  });
}
deleteRoomPrivate(id:string){
  this.db.collection('PrivateChatRooms').doc(id).delete().then(function(){
    console.log("se elimino la sala privada");
  }).catch(function(error){
    console.log("error");
  });
}
}
