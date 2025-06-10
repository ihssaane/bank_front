import { PageFooterModule } from './page-footer.module';

describe('PageFooteModule', () => {
    let pageFooterModule: PageFooterModule;

    beforeEach(() => {
        pageFooterModule = new PageFooterModule();
    });

    it('should create an instance', () => {
        expect(pageFooterModule).toBeTruthy();
    });
});
