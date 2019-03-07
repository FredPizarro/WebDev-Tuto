import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Socket (cd s-server) */
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { socketConfig } from './socket-io.config';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
