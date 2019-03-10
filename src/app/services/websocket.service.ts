import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkOnStatus();
  }

  // revisar status, para saver cuando se conecta o desconecta
  checkOnStatus() {
    this.socket.on('connect', ()=>{
      console.log('\x1b[32m%s\x1b[0m','Conectado al servidor');
      this.socketStatus = true;
    });
    this.socket.on('disconnect', ()=>{
      console.log('\x1b[31m%s\x1b[0m','Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  // Emitir cualquier evento hacia el servidor
  emit( evt: string, payload?: any, callback?: ()=>void ){
    this.socket.emit( evt, payload, callback );
  }

  // Escuchar cualquier evento del servidor
  listen( evt: string ){
    return this.socket.fromEvent( evt );
  }

}
