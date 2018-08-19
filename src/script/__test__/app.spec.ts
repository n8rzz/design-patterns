import {expect} from 'chai';
import {App} from '../app';

describe('App', () => {
    describe('.increment()', () => {
        it('increments #_id', () => {
            const app = new App();

            app.increment();

            expect(app.id).to.eq(1);
        });
    });
});
