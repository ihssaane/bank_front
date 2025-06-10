import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations.component';
import { PageHeaderModule, PageFooterModule } from '../../../shared';
import { MainComponent } from './main/main.component';
import { VersementComponent } from './versement/versement.component';
import { RetraitComponent } from './retrait/retrait.component';
import { VirementComponent } from './virement/virement.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationService } from 'src/app/core/services/operation.service';
import { CompteService } from 'src/app/core/services/compte.service';


@NgModule({ declarations: [
        OperationsComponent,
        MainComponent,
        VersementComponent,
        RetraitComponent,
        VirementComponent
    ], imports: [CommonModule,
        OperationsRoutingModule,
        PageHeaderModule, PageFooterModule,
        FormsModule,
        ReactiveFormsModule], providers: [OperationService, CompteService, provideHttpClient(withInterceptorsFromDi())] })
export class OperationsModule { }
