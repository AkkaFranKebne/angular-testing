import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = ["Server1"];
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverSize = '8GB';
  serverCreated = false;

  constructor() {
    setTimeout( () => {
        this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
   }    
    onUpdateServerName( event : Event){
        // console.log(event);
        this.serverName = ( <HTMLInputElement>event.target ).value; 
    } 
   onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'A ' + this.serverSize + ' server was created and named ' + this.serverName  + '.';    
    }

}
