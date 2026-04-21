import { rootReducer } from './store';

describe('Проверка инициализации рутредюсера', () => {
    it('Проверка инициализации рутредюсера', () => {
        const state = rootReducer(undefined, { type: '@@INIT' });
        expect(state).toHaveProperty('userState');
        expect(state).toHaveProperty('feed');
        expect(state).toHaveProperty('burgerConstructor');
        expect(state).toHaveProperty('orderHistory');
    });
});