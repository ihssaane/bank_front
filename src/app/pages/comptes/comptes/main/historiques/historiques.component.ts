import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Compte } from 'src/app/core/models/compte.model';
import { Operation } from 'src/app/core/models/operation.model';
import { OperationService } from 'src/app/core/services/operation.service';

@Component({
    selector: 'app-historiques',
    templateUrl: './historiques.component.html',
    styleUrls: ['./historiques.component.scss'],
    standalone: false
})
export class HistoriquesComponent {
  public opForm!: FormGroup;
  ops: Operation[] = [] ;

  constructor( private formBuilder: FormBuilder,  private operationService: OperationService){}
  
  ngOnInit(): void {
  this.opForm = this.formBuilder.group({
    numCompte: ['', [ Validators.required]]
   })
  }

  get fb():any { return this.opForm.controls; }

  
  onKeyUp(x:any) { 
    if(x.target.value !=''){
      this.ops = [] ;
    this.operationService.getOperationsByCompte(x.target.value).subscribe({
      next: (oper: Operation[]) => {
        this.ops.push(...oper);
      },
      error: (err: any) => {
        this.ops = [] ;
      },
      complete: () => {}
    })
   }
  }
}