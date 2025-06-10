import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../../../../core/services/client.service';
import { Client } from '../../../../../core/models/client.model';
@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    standalone: false
})
export class AddComponent {
  public customerForm!: FormGroup;
  public submitted =  false;
  isSuccessed = false;
  idClient: number = 0  ;
  name: string ='';
  showCompteForm: boolean = false;
  constructor( private formBuilder: FormBuilder, private clientService: ClientService){}
  
  
ngOnInit(): void {

  this.customerForm= this.formBuilder.group({
    firstName: ['', [ Validators.required,]],
    lastName: ['', [ Validators.required,]],
    telephone: ['', [ Validators.required]],
    birthday: ['', [Validators.required ]],
    email: ['', []]
   })
  }

  get fb():any { return this.customerForm.controls; }

onSubmit() {
  this.submitted=true;
  if(this.customerForm.invalid){
      return;
  }else{
    this.clientService.postClients(<Client>{
      firstName: this.fb.firstName.value,
      lastName: this.fb.lastName.value,
      telephone: this.fb.telephone.value,
      email: this.fb.email.value,
      birthday: this.fb.birthday.value?.replace("/", "-")
    }).subscribe(data => {
      this.idClient = data.id;
      this.name = this.fb.firstName.value + ' ' + this.fb.lastName.value;
      this.isSuccessed =  true;
      this.showCompteForm = true;
    }, err => console.log(err))
  }
 }
}

