import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: false
})
export class MainComponent {
  isHistoriqueCompte = false;
  isListComptes = false;
  isState = false;
 
  clickHistorique= () => {
    this.isListComptes = false;
    this.isHistoriqueCompte = true;
    this.isState= false;
    }
 
  clickList = () => {
   this.isListComptes = true;
   this.isHistoriqueCompte = false;
   this.isState= false;
   }

   clickState = () => {
    this.isListComptes = false;
    this.isHistoriqueCompte = false;
    this.isState= true;
    }
}
