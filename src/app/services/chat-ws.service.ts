import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatWsService {

  constructor( private websocketS: WebsocketService ) { }

  sendMessage(mensaje: string){
    // construir el payload
    const payload = {
      id: 1,
      usename: "FredPizarro",
      message: mensaje
    };

    // llamar al WebsocketService y emitir un evento
    this.websocketS.emit("message", payload);
  }

  getMessages(){
     return this.websocketS.listen('key-mensaje-nuevo');
  }

}
