import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: false
})
export class MainComponent {

  isNewVersement = false;
  isNewVirement = false;
  isNewRetrait = false;
 
  clickAddRetrait = () => {
    this.isNewRetrait = true;
    this.isNewVersement = false;
    this.isNewVirement = false;
    }
 
  clickAddVersement = () => {
    this.isNewRetrait = false;
    this.isNewVersement = true;
    this.isNewVirement = false;
   }

   clickAddVirement = () => {
    this.isNewRetrait = false;
    this.isNewVersement = false;
    this.isNewVirement = true;
   }

}
