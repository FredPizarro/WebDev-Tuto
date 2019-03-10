import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatWsService } from '../../services/chat-ws.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.less']
})
export class ChatboxComponent implements OnInit, OnDestroy {

  txt = '';
  messageSubscription: Subscription;
  constructor(private chatWsS: ChatWsService) { }

  ngOnInit() {
    this.chatWsS.getMessages().subscribe((data_msg)=>{
      console.log(data_msg);
    });
  }
  ngOnDestroy(){
    this.messageSubscription.unsubscribe();
  }

  enviar(){
    this.chatWsS.sendMessage(this.txt);
    this.txt = ''; // limpiar luego de enviar un mensaje
  }

}
