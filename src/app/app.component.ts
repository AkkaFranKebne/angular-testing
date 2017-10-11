import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   //you can change it to "style:" and add styles here in `` 
})
export class AppComponent {
    username = '';
    usernameGiven  = false;
    detailesShown = false;
    //numberOfVisistsInDetailes = 0;
    visitsInDetailes = [];
        
    onUpdateUsername(event: Event){
            if (this.username.length > 0) {
                    this.usernameGiven = true;
                }
                else {
                    this.usernameGiven =  false;
                }
    }
    
    onAddingUsername(event: Event) {
        this.username = (<HTMLInputElement>event.target).value; 
    }
    
    onToggleDetailes(event: Event) {
        if (this.detailesShown == false) {
            this.detailesShown = true;
            //this.numberOfVisistsInDetailes +=1;
            this.visitsInDetailes.push(Date());
            //console.log(this.numberOfVisistsInDetailes);
            //console.log(this.visitsInDetailes);
        }
        else {
            this.detailesShown = false;
        }
            
    }
    

  
}



