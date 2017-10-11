import { Component } from '@angular/core';        //import component decorater from specific angular pachahe

@Component({                                       //component decorator, we pass some metadata here
    selector: 'app-server',                        //html tag used with this component, needs to be unique
    templateUrl: './server.component.html',         //path to html component file  (can use "template" and put html here, between ``)
    styles: [`
        .online {
            background-color: yellow;
        }
    `]
})                                        
export class ServerComponent {                     // make a ts class
    serverId: number = 10;                          //you can write the type of variable, but you do not have to
    serverStatus: string = 'offline';
    
    constructor(){
        this.serverStatus = Math.random() >0.5 ? 'online' : 'offline';
    }
    getServerStatus(){
        return this.serverStatus; 
    };
    
    getColor(){
        return this.serverStatus =='online' ? 'green' : 'red';
    }
}