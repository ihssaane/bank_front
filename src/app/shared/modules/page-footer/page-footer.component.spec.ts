import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageFooterComponent } from './page-footer.component';
import { PageFooterModule } from './page-footer.module';

describe('PageFooterComponent', () => {
    let component: PageFooterComponent;
    let fixture: ComponentFixture<PageFooterComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    imports: [PageFooterModule, RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
