import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptesRoutingModule } from './comptes-routing.module';
import { ComptesComponent } from './comptes.component';
import { MainComponent } from './main/main.component';
import { PageHeaderModule, PageFooterModule } from '../../../shared';
import { ListComptesComponent } from './main/list-comptes/list-comptes.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CompteService } from 'src/app/core/services/compte.service';
import { HistoriquesComponent } from './main/historiques/historiques.component';
import { EtatCompteComponent } from './main/etat-compte/etat-compte.component';
import { OperationService } from 'src/app/core/services/operation.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({ declarations: [
        ComptesComponent,
        MainComponent,
        ListComptesComponent,
        HistoriquesComponent,
        EtatCompteComponent
    ], imports: [CommonModule,
        ComptesRoutingModule,
        PageHeaderModule, PageFooterModule,
        FormsModule, ReactiveFormsModule], providers: [OperationService, CompteService, provideHttpClient(withInterceptorsFromDi())] })
export class ComptesModule { }
