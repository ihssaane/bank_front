import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compte } from 'src/app/core/models/compte.model';
import { CompteService } from 'src/app/core/services/compte.service';

@Component({
    selector: 'app-create-compte',
    templateUrl: './create-compte.component.html',
    styleUrls: ['./create-compte.component.scss'],
    standalone: false
})
export class CreateCompteComponent {
  public compteForm!: FormGroup;
  @Input() name: string='';
  @Input() idClient: number = 0;
  public submitted =  false;
  isSuccessed: boolean = false;
  isCourant: boolean = true;
  isEpargne: boolean = false;
  showCompteForm: boolean = false;
  constructor( private formBuilder: FormBuilder, private compteService: CompteService){}
  
ngOnInit(): void {

  this.compteForm = this.formBuilder.group({
    name: [''],
    dt: ['', [ Validators.required,]],
    balance: ['', [ Validators.required]],
    type: ['', [Validators.required ]]
   })

   this.fb.name.setValue(this.name);
  }

  get fb():any { return this.compteForm.controls; }

onSubmit() {
  this.submitted=true;
  console.log(this.compteForm.value)
  if(this.compteForm.invalid){
      return;
  }else{
     this.compteService.postComptes(<Compte>{
          decouvert: this.isCourant ? this.fb.dt.value:  0,
          tauxInteret: this.isEpargne ? this.fb.dt.value: 0,
          balance: this.fb.balance.value,
          clientId: this.idClient
     }).subscribe({
      next: (data: any) => {
          this.isSuccessed =  true;
          this.compteForm.reset();
      },
      error: (error: any) => {},
      complete: () => {}
     }) 
  }
 }

 onChangeOption ($event: any) {
   if($event.target.value ==='CC') {
    this.isCourant = true;
    this.isEpargne = false;
   }
   if($event.target.value ==='CE') {
    this.isCourant = false;
    this.isEpargne = true;
   }
 }
}
