import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../shared/web-socket.service';

@Component({
  selector: 'app-web-scoket',
  templateUrl: './web-scoket.component.html',
  styleUrls: ['./web-scoket.component.css']
})
export class WebScoketComponent implements OnInit {

  constructor(private wsService: WebSocketService) { }

  ngOnInit() {
    this.wsService.createObservableSoclet('ws://localhost:8085' ).subscribe(date => console.log(date),
        err => console.log(err),
          () => console.log('flow finished')
    );
  }
sendMessageToServer() {
    this.wsService.sendMessage('Hello from client');
}
}
