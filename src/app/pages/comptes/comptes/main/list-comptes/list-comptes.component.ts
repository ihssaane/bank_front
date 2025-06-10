import { Component } from '@angular/core';
import { Compte } from 'src/app/core/models/compte.model';
import { CompteService } from 'src/app/core/services/compte.service';

@Component({
    selector: 'app-list-comptes',
    templateUrl: './list-comptes.component.html',
    styleUrls: ['./list-comptes.component.scss'],
    standalone: false
})
export class ListComptesComponent {
  comptes: Compte[] = [];
  type: string = '';
  constructor(private compteService: CompteService) {}

  onSelectTypeCompte($event: any): void {
    if($event.target.value.length > 0) {
      this.getComptes($event.target.value);
    }
  }

  getComptes(type: string){
   this.type = type; 
   this.compteService.getComptes(this.type).subscribe({
      next: (comptes:Compte[]) => {
        this.comptes = [] ;
        this.comptes.push(...comptes);
      },
      error: (err: any) => {},
      complete: () => {}
    })
  }

  onSuspendCompte(numCompte:string){
    this.compteService.suspendCompte(numCompte).subscribe({
      next: (data: boolean) => {
        this.getComptes(this.type);
        // do other things...
      },
      error: (err: any) => {},
      complete: () => {}
    })
  }

  onActiveCompte(numCompte:string){
    this.compteService.aciveCompte(numCompte).subscribe({
      next: (data: boolean) => {
        this.getComptes(this.type);
        // do other things...
      },
      error: (err: any) => {},
      complete: () => {}
    })
  }
}
