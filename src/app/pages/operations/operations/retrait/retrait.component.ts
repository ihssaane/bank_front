import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Compte } from 'src/app/core/models/compte.model';
import { CompteService } from 'src/app/core/services/compte.service';
import { OperationService } from 'src/app/core/services/operation.service';

@Component({
    selector: 'app-retrait',
    templateUrl: './retrait.component.html',
    styleUrls: ['./retrait.component.scss'],
    standalone: false
})
export class RetraitComponent {
  public opForm!: FormGroup;
  public submitted =  false;
  isSuccessed: boolean = false;
  showDetails: boolean = false;
  isError: string = '';

  compte!: Compte;

  constructor( private formBuilder: FormBuilder, 
               private compteService:CompteService,
               private operationService: OperationService){}
  
ngOnInit(): void {

  this.opForm = this.formBuilder.group({
    montant: ['', [ Validators.required,]],
    numCompte: ['', [ Validators.required]],
    type: ['', [ Validators.required]]
   })

  }

  get fb():any { return this.opForm.controls; }

onSubmit() {
  this.submitted=true;

  if(this.opForm.invalid){
      return;
  }else{
    this.operationService.operationRetraits({
      numCompte: this.fb.numCompte.value, 
      amount:    this.fb.montant.value
    }).subscribe({
      next: (data) => {
        this.isError = '';
        this.isSuccessed = true;
      },
      error: (err) => {
        this.isError = err.error.message;
      },
      complete: () => {}
    })
  }
 }

onKeyUp(x:any) { 
  if(x.target.value !=''){
  this.compteService.getCompte(x.target.value, this.fb.type.value).subscribe({
    next: (c: any) => {
      let compte = c?.body;
      this.compte = <Compte>{} ;
      this.compte = <Compte>{
        numCompte: compte?.numCompte,
        createdAt: compte?.createdAt,
        balance: compte?.balance,
        tauxInteret: compte?.tauxInteret,
        decouvert: compte?.decouvert,
        client: compte?.client,
        status: compte?.status
      };
      this.showDetails =  true;     
    },
    error: (err: any) => {
      this.isError = err.error.message;
      this.compte = <Compte>{} ;
    },
    complete: () => {}
  })
 }

}
}
