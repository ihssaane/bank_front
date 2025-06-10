import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageFooterComponent } from './page-footer.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [PageFooterComponent],
    exports: [PageFooterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageFooterModule {}
