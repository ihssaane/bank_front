import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Operation } from '../models/operation.model';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  constructor(private httpClient: HttpClient) { }

  public postOperations(operation:Operation) :  Observable<Operation>  {
    return this.httpClient.post<Operation>(`${environment.apiUrl}/${environment.prefix}/operations`, operation);
  }

  public getOperations() :  Observable<Operation[]>  {
    return this.httpClient.get<Operation[]>(`${environment.apiUrl}/${environment.prefix}/operations`,);
  }

  public getOperation(id: number) :  Observable<Operation>  {
    return this.httpClient.get<Operation>(`${environment.apiUrl}/${environment.prefix}/operation/${id}`,);
  }

  public operationVersments(data: any) :  Observable<Operation>  {
    return this.httpClient.post<Operation>(`${environment.apiUrl}/${environment.prefix}/versements`, 
                               data);
  }

  public operationRetraits(data: any) :  Observable<Operation>  {
    return this.httpClient.post<Operation>(`${environment.apiUrl}/${environment.prefix}/retraits`, 
                            data);
  }

  public operationVirements(data: any) :  Observable<Operation>  {
    return this.httpClient.post<Operation>(`${environment.apiUrl}/${environment.prefix}/virements`,
         data);
  }


  public getOperationsByCompte(numberCompte:string) :  Observable<Operation[]>  {
    return this.httpClient.get<Operation[]>(`${environment.apiUrl}/${environment.prefix}/operations/client/${numberCompte}`);
  }
}


