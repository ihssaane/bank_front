import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: false
})
export class MainComponent {
 isNewClient = false;
 isListClient = false;

 clickAdd = () => {
   this.isListClient = false;
   this.isNewClient = true;
   }

 clickList = () => {
  this.isListClient = true;
  this.isNewClient = false;
  }
}
