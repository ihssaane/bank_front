import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Client } from '../models/client.model';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  public postClients(client:Client) :  Observable<Client>  {
    return this.httpClient.post<Client>(`${environment.apiUrl}/${environment.prefix}/clients`, client);
  }

  public getClients() :  Observable<Client[]>  {
    return this.httpClient.get<Client[]>(`${environment.apiUrl}/${environment.prefix}/clients`,);
  }

  public getClient(id: number) :  Observable<Client>  {
    return this.httpClient.get<Client>(`${environment.apiUrl}/${environment.prefix}/clients/${id}`,);
  }


}
