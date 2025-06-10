import { Component } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    standalone: false
})
export class ListComponent {
  clients: Client[]= [];

  constructor(private _clientService: ClientService) {
    this.getClients();
  }

  getClients() {
    this._clientService.getClients().subscribe({
      next: (clients: Client[]) =>{
        this.clients.push(...clients);
      },
      error: (error: any) =>{},
      complete: () =>{}
    })
  }
}
