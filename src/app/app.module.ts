import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* Socket (cd s-server) */
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { socketConfig } from './socket-io.config';

import { AppComponent } from './app.component';
import { StatusComponent } from './components/status/status.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
