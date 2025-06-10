import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
    standalone: false
})
export class PageHeaderComponent  {
    user_role: string =  'admin';
    public navs =  [
        { path: '/clients', name: 'Clients',  role: 'admin' },
        { path: '/comptes', name: 'Comptes',  role: 'admin' },
        { path: '/operations', name: 'Opérations',  role: 'admin' },
        { path: '/espace-client', name: 'Espace Client',  role: 'client' }
    ]
 }