import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Compte } from '../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  constructor(private httpClient: HttpClient) { }

  public postComptes(compte:Compte) :  Observable<Compte>  {
    return this.httpClient.post<Compte>(`${environment.apiUrl}/${environment.prefix}/comptes`, compte);
  }

  public getComptes(type: string ="CC") :  Observable<Compte[]>  {
    return this.httpClient.get<Compte[]>(`${environment.apiUrl}/${environment.prefix}/comptes?type=${type}`);
  }

  public getCompte(numberCompte: string, type: string) :  Observable<any>  {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/comptes/${numberCompte}/${type}`);
  }

  public aciveCompte(numberCompte: string) :  Observable<boolean>  {
    return this.httpClient.get<boolean>(`${environment.apiUrl}/${environment.prefix}/comptes/active/${numberCompte}`,);
  }

  public suspendCompte(numberCompte: string) :  Observable<boolean>  {
    return this.httpClient.get<boolean>(`${environment.apiUrl}/${environment.prefix}/comptes/suspendre/${numberCompte}`,);
  }

}
