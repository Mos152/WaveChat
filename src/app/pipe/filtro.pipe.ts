import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(chatRooms:any[], user:any): any[] {
    return chatRooms.filter(chat =>{
      if (chat.userID === user.uid) {
        return chat.userID
      }
    })
  }

}
